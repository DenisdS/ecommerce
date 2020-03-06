import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Exclusives from '../pages/exclusives'
import Favorites from '../pages/favorites'
import Products from '../pages/products'
import Promotions from '../pages/promotions'

const routes = () =>{

  return(
    <Switch>
        <Route exact path='/' component={Products}/>
        <Route path='/todos' component={Products}/>
        <Route path='/exclusivos' component={Exclusives}/>
        <Route path='/promocoes' component={Promotions}/>
        <Route path='/favoritos' component={Favorites}/>
    </Switch>
  );
}
export default routes;
