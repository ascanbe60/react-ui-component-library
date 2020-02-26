import React from 'react';
import cn from 'classnames';
import { string } from 'prop-types';

import Link from '../Link/index';

import './styles.scss';

const NavLink = ({
  className,
  text,
  url,
}) => (
  <Link
    className={cn(
      'nav-link',
      className,
    )}
    url={url}
    newTab={false}
    text={text}
  />
);

NavLink.propTypes = {
  className: '',
};

NavLink.propTypes = {
  className: string,
  text: string.isRequired,
  url: string.isRequired,
};

export default NavLink;
