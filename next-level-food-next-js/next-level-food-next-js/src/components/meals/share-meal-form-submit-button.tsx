'use client';

import { useFormStatus } from 'react-dom';

export function ShareMealsFormSubmitButton() {
  const status = useFormStatus();

  const { pending } = status;

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}
