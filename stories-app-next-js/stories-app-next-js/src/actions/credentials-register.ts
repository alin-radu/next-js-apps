'use server';

import bcrypt from 'bcryptjs';

import { connectDatabase } from '@/lib/db-utils';

import { User } from '@/lib/db-models';

interface registerUserState {
  error: string;
  success: boolean;
}

export async function credentialsRegister(_: registerUserState, formData: FormData) {
  const { username, email, img, password, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match', success: false };
  }

  try {
    connectDatabase();

    const user = await User.findOne({ username });

    if (user) {
      return { error: 'Username already exists', success: false };
    }

    const salt = await bcrypt.genSalt(10);
    let hashedPassword;
    if (typeof password === 'string') {
      hashedPassword = await bcrypt.hash(password, salt);
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { error: '', success: true };
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!', success: false };
  }
}
