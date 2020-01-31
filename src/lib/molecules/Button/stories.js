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
};

const options = {
  shape: {
    square: 'square',
    rounded: 'rounded',
    round: 'round',
  },
  priority: {
    primary: 'primary',
    secondary: 'secondary',
  },
};

const defaultValues = {
  shape: 'square',
  priorty: 'primary',
};

export const Default = () => (
  <Button
    shape={select(labels.shape, options.shape, defaultValues.shape)}
    priority={select(labels.priority, options.priority, defaultValues.priority)}
  />
);
