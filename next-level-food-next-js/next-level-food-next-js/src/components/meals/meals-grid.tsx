import { notFound } from 'next/navigation';

import { MealItem } from '.';

import { Meal } from '@/types/meal';

import classes from './meals-grid.module.css';

export function MealsGrid({ meals }: { meals: Meal[] }) {
  if (!meals) {
    return notFound();
  }

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        if (!meal) {
          return null;
        }

        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
}
