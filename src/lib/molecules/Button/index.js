import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const Button = ({ shape, priority }) => {
  return (
    <button
      className={cn('button', {
        'button--square': shape === 'square',
        'button--rounded': shape === 'rounded',
        'button--round': shape === 'round',
        'button--primary': priority === 'primary',
        'button--secondary': priority === 'secondary',
      })}
    >
      Button
    </button>
  );
};

Button.defaultProps = {
  shape: 'square',
};

Button.propTypes = {
  shape: string,
};

export default Button;
