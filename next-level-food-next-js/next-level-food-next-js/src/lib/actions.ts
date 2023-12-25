'use server';

import { MealFormData } from '@/types/meal';
import { saveMeal } from './queries';

export async function shareMeal(formData: FormData) {
  const meal: MealFormData = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  } as MealFormData;

  await saveMeal(meal);
}
