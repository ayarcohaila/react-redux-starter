import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App';

export default function(store) {
  return (
    <Route path='/' component={App}>

    </Route>
  )
}
