export type MealFormData = {
  creator: string;
  creator_email: string;
  title: string;
  summary: string;
  instructions: string;
  image: File;
  slug?: string;
} | null;

export type Meal = {
  id: number;
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
} | null;
