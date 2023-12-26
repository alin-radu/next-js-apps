const db = sql('meals.db');

import fs from 'node:fs';

import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

import { getDelay } from '@/utils/getDelay';
import { MealFormData } from '@/types/meal';

export async function getMeals() {
  await getDelay(1500);

  return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal: MealFormData) {
  if (!meal) {
    return;
  }

  const mealSlug = slugify(meal.title, { lower: true });
  const mealInstructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${mealSlug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferdImage = await meal.image?.arrayBuffer();

  stream.write(Buffer.from(bufferdImage), (error) => {
    if (error) {
      throw new Error('Saving image failed');
    }
  });

  const formatedMeal = {
    ...meal,
    image: `/images/${fileName}`,
    slug: mealSlug,
    instructions: mealInstructions,
  };

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(formatedMeal);
}
