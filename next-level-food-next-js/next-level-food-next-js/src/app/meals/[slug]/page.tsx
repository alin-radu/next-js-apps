import { getEnvironment } from '@/utils/getEnvironment';

interface MealPageProps {
  params: string;
}

export default function MealPage({ params }: MealPageProps) {
  getEnvironment('MealPage');

  console.log('%c-> developmentConsole: params= ', 'color:#77dcfd', params);

  return (
    <main>
      <h1>MealPage</h1>
    </main>
  );
}
