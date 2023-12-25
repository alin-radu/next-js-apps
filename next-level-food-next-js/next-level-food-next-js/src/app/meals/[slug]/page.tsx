import { notFound } from 'next/navigation';
import { getMeal } from '@/lib/meals';

import Image from 'next/image';

import classes from './page.module.css';

import { Meal } from '@/types/meal';

interface MealDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: MealDetailsPageProps) {
  const meal = (await getMeal(params.slug)) as Meal;

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }: MealDetailsPageProps) {
  const meal = (await getMeal(params.slug)) as Meal;

  if (!meal) {
    notFound();
  }

  // const instructionsFormated = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.summary} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructionsFormated,
          }}
        ></p> */}
        <p style={{ whiteSpace: 'pre-line' }} className={classes.instructions}>
          {`
        ${meal.instructions}`}
        </p>
      </main>
    </>
  );
}
