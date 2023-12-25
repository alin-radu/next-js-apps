import classes from './loading-meals.module.css';

export default function MealsLoading() {
  return (
    <div className={classes.container}>
      <h1 className={classes.content}>Fetching meals ...</h1>
    </div>
  );
}
