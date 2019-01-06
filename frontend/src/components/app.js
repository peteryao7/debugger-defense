import React from 'react';
import { AuthRoute} from '../util/route_util';
import { Switch } from 'react-router-dom';

import Modal from "./modal/modal";
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;