import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Exclusives from '../pages/exclusives'
import Favorites from '../pages/favorites'
import Products from '../pages/products'
import Promotions from '../pages/promotions'

const routes = () =>{

  return(
    <Switch>
        <Route path='/todos' path='/' page={Products}/>
        <Route path='/exclusivos' page={Exclusives}/>
        <Route path='/promocao' page={Promotions}/>
        <Route path='/favoritos' page={Favorites}/>
    </Switch>
  );
}
export default routes;
