'use client';

import { useFormState } from 'react-dom';

import * as actions from '@/lib/actions';

import { ImagePicker } from '@/components/images/image-picker';
import { ShareMealsFormSubmitButton } from '@/components/meals';

import classes from './share-meal-form.module.css';

export function ShareMealForm() {
  const [formState, formAction] = useFormState(actions.shareMeal, { message: null });
  return (
    <form className={classes.form} action={formAction}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>

      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>

      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" rows={10} required></textarea>
      </p>

      <ImagePicker label="Your Image" name="image" />

      {formState.message && <p>{formState.message}</p>}

      <p className={classes.actions}>
        <ShareMealsFormSubmitButton />
      </p>
    </form>
  );
}
