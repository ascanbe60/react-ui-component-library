import React from 'react';
import { select } from '@storybook/addon-knobs';
import Button from './index';

export default {
  title: 'Button',
  component: Button,
};

const labels = {
  shape: 'Shape',
  priority: 'Priority',
  shadow: 'Shadow',
};

const options = {
  shape: {
    square: '',
    rounded: 'rounded',
    round: 'round',
  },
  shadow: {
    none: '',
    light: 'light',
    heavy: 'heavy',
  },
  priority: {
    primary: '',
    secondary: 'secondary',
  },
};

const defaultValues = {
  shape: 'square',
  priority: 'primary',
  shadow: 'none',
};

export const Default = () => (
  <Button
    shape={select(labels.shape, options.shape, defaultValues.shape)}
    priority={select(labels.priority, options.priority, defaultValues.priority)}
    shadow={select(labels.shadow, options.shadow, defaultValues.shadow)}
  />
);
