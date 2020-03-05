import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Exclusives from '../pages/exclusives'
import Favorites from '../pages/favorites'
import Products from '../pages/products'
import Promotions from '../pages/promotions'

const routes = () =>{

  return(
    <Switch>
        <Route path='/todos' component={Products}/>
        <Route path='/exclusivos' component={Exclusives}/>
        <Route path='/promocao' component={Promotions}/>
        <Route path='/favoritos' component={Favorites}/>
    </Switch>
  );
}
export default routes;
