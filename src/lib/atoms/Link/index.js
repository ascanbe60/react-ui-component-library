import React from 'react';
import cn from 'classnames';
import { string, bool } from 'prop-types';

import './styles.scss';

const Link = ({
  className,
  url,
  newTab,
  text,
}) => (
  <a
    className={cn(
      'link',
      className,
    )}
    href={url}
    target={newTab ? '_blank' : '_self'}
    rel={newTab ? 'noopener noreferrer' : ''}
  >{text}</a>
);

Link.defaultProps = {
  className: '',
  newTab: false,
};

Link.propTypes = {
  className: string,
  url: string.isRequired,
  newTab: bool,
  text: string.isRequired,
};

export default Link;
