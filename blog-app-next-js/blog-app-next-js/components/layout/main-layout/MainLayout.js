import { Fragment } from 'react';

import MainNavigation from '../main-navigation/MainNavigation';

function MainLayout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default MainLayout;
