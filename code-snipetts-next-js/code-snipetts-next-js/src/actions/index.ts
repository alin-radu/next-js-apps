'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/db';

// createSnippet
export async function createSnippet(_: { message: string }, formData: FormData) {
  try {
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be longer.',
      };
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code must be longer.',
      };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: 'Something went wrong',
      };
    }
  }

  revalidatePath('/');
  redirect('/');
}

// findSnippet
export async function findSnippet(id: number) {
  return await db.snippet.findFirst({
    where: {
      id,
    },
  });
}

// editSnippet
export async function editSnippet(id: number, code: string, title: string) {
  await db.snippet.update({
    where: { id },
    data: { title, code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

// deleteSnippet
export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath('/');
  redirect('/');
}
