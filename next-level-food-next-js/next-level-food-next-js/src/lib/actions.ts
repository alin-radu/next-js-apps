'use server';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { saveMeal } from './queries';

import { MealFormData } from '@/types/meal';

interface ShareMealFormState {
  message?: string | null;
}

function isInvalidText(text: string | undefined) {
  return !text || text?.trim() === '';
}

function isInvalidEmail(text: string | undefined) {
  return !text || text?.trim() === '' || !text?.includes('@');
}

function isInvalidFile(file: File | undefined) {
  return !file || file?.size === 0;
}

export async function shareMeal(
  _: ShareMealFormState,
  formData: FormData
): Promise<ShareMealFormState> {
  const meal: MealFormData = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  } as MealFormData;

  if (
    isInvalidText(meal?.title) ||
    isInvalidText(meal?.summary) ||
    isInvalidText(meal?.instructions) ||
    isInvalidText(meal?.creator) ||
    isInvalidEmail(meal?.creator_email) ||
    isInvalidFile(meal?.image)
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveMeal(meal);

  revalidatePath('/meals');
  redirect('/meals');
}
