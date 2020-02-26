import React, { useContext } from 'react';
import cn from 'classnames';
import { arrayOf, objectOf, string } from 'prop-types';

import { MenuContext } from '../../organisms/SiteHeader/index';
import NavLink from '../../atoms/NavLink/index';

import './styles.scss';

const MainNav = ({ navItems }) => {
  const [menuIsOpen] = useContext(MenuContext);

  navItems = [
    {
      displayName: 'Home',
      url: '/',
    },
    {
      displayName: 'Our Team',
      url: '/our-team',
    },
    {
      displayName: 'Contact Us',
      url: '/contact-us',
    },
  ];

  return (
    <nav
      className={cn('main-nav', {
        'main-nav--open': menuIsOpen,
      })}
    >
      {navItems &&
        navItems.map(item => (
          <NavLink
            className="main-nav__link"
            text={item.displayName}
            url={item.url}
            newTab
          />
        ))}
    </nav>
  );
};

MainNav.propTypes = {
  navItems: arrayOf(objectOf(string)).isRequired,
};

export default MainNav;
