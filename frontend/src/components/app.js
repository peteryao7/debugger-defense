import React from 'react';
import NavBarContainer from './nav/navbar_container';

import Modal from "./modal/modal"
import MainPage from './main/main_page';
import Footer from "./footer";

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <MainPage />
    <Footer />
  </div>
);

export default App;