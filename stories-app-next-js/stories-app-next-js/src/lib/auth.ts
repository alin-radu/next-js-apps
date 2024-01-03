import bcrypt from 'bcryptjs';

import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

import { authConfig } from './auth.config';
import { connectDatabase } from '@/lib/db-utils';

import { User } from './db-models';

const login = async (credentials: any) => {
  try {
    connectDatabase();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error('Wrong credentials!');

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) throw new Error('Wrong credentials!');

    return user;
  } catch (err) {
    throw new Error('Failed to login!');
  }
};

const GITHUB_CLIENT_ID = process.env.AUTH_GITHUB_ID;
const GITHUB_CLIENT_SECRET = process.env.AUTH_GITHUB_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error('Missing GitHub oauth credentials');
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(
            '%c-> developmentConsole: CredentialsProvider | user =========> ',
            'color:#77dcfd',
            user
          );
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'github') {
        connectDatabase();

        try {
          const user = await User.findOne({ email: profile?.email });

          if (!user && profile?.name && profile?.email) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(
            '%c-> developmentConsole: callbacks | signIn | err ===> ',
            'color:#77dcfd',
            err
          );
          return false;
        }
      }

      return true;
    },
    ...authConfig.callbacks,
  },
});
