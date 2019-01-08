import React from 'react';
import NavBarContainer from './nav/navbar_container';

import Modal from "./modal/modal"
import MainPage from './main/main_page';
import FooterContainer from "./footer/footer_container";

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <MainPage />
    <FooterContainer />
  </div>
);

export default App;