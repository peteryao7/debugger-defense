import React from 'react';
import NavBarContainer from './nav/navbar_container';

import Modal from "./modal/modal"
import MainPage from './main/main_page';

const App = () => (
  <div className="full-app">
    <Modal />
    <NavBarContainer />
    <MainPage />
  </div>
);

export default App;