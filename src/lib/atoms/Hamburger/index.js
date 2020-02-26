import React, { useContext } from 'react';
import { bool } from 'prop-types';
import cn from 'classnames';

import { MenuContext } from '../../organisms/SiteHeader/index';

import './styles.scss';

const Hamburger = ({ withText }) => {
  const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

  const handleSetMenuIsOpen = () =>
    menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);

  return (
    <div
      className={cn('hamburger', {
        open: menuIsOpen,
      })}
      onClick={handleSetMenuIsOpen}
    >
      <div className="hamburger__lines">
        <div className="hamburger__line" />
        <div className="hamburger__line" />
        <div className="hamburger__line" />
      </div>
      {withText && (
        <div className="hamburger__text">
          <span>{menuIsOpen ? 'close' : 'menu'}</span>
        </div>
      )}
    </div>
  );
};

Hamburger.defaultProps = {
  withText: false,
};

Hamburger.propTypes = {
  withText: bool,
};

export default Hamburger;
