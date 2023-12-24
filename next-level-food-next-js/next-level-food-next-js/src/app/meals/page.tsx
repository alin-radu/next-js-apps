import { getEnvironment } from '@/utils/getEnvironment';
import Link from 'next/link';

export default function MealsPage() {
  getEnvironment('MealsPage');
  return (
    <main>
      <h1>MealsPage</h1>
      <Link href="/meals/first">First Meal</Link>
    </main>
  );
}
