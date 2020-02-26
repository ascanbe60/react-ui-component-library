import React, { createContext, useState } from 'react';

import Hamburger from '../../atoms/Hamburger/index';

import './styles.scss';
import MainNav from '../../molecules/MainNav';

const MenuContext = createContext([true, () => {}]);

const SiteHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <header className="site-header">
      <div className="site-header__container">
        <img
          className="site-header__logo"
          src="/placeholder-logo-200-light.png"
          alt="Logo"
        />
      </div>
      <div className="site-header__container">
        <MenuContext.Provider value={[menuIsOpen, setMenuIsOpen]}>
          <MainNav />
          <Hamburger />
        </MenuContext.Provider>
      </div>
    </header>
  );
};

export { MenuContext };
export default SiteHeader;
