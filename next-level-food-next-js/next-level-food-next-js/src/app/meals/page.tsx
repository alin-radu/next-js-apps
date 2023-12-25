import { Suspense } from 'react';
import Link from 'next/link';

import { getMeals } from '@/lib/queries';

import { MealsGrid } from '@/components/meals';

import clases from './page.module.css';

import { Meal } from '@/types/meal';
import MealsLoading from './loading-meals';

async function Meals() {
  const meals = (await getMeals()) as Meal[];

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={clases.header}>
        <h1>
          Delicious meals, created <span className={clases.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
        <p className={clases.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={clases.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
