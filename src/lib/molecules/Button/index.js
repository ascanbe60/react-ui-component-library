import React from 'react';
import { string } from 'prop-types';
import cn from 'classnames';

import './styles.scss';

const Button = ({
  shape,
  priority,
  shadow,
}) => {
  return (
    <button
      className={cn('button', {
        'button--rounded': shape === 'rounded',
        'button--round': shape === 'round',
        'button--shadow--light': shadow === 'light',
        'button--shadow--heavy': shadow === 'heavy',
        'button--secondary': priority === 'secondary',
      })}
    >
      Button
    </button>
  );
};

Button.defaultProps = {
  shape: 'square',
  priority: 'primary',
  shadow: 'none',
};

Button.propTypes = {
  shape: string,
  priority: string,
  shadow: string,
};

export default Button;
