import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { clearRouteError } from 'app/actions/routeError';
import App from 'app/components/App';
import HomeView from 'app/views/Home';
import ContactView from 'app/views/Contact';
import BuyView from 'app/views/Buy';
import ErrorView from 'app/views/Error';


export default function getRoutes(store) {
  const onChange = () => {
    store.dispatch(clearRouteError());
  };
  return (
    <Route path="/" component={App} onChange={onChange}>
      <Route path="/__404" component={ErrorView} status={404} />
      <Route path="/__500" component={ErrorView} status={500} />
      <IndexRoute component={HomeView} />
      <Route path="/contact" component={ContactView} />
      <Route path="/buy" component={BuyView} />
      <Route path="*" component={ErrorView} status={404} />
    </Route>
  );
}
