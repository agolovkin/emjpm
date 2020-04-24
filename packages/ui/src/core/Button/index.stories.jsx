import { Trash } from '@styled-icons/boxicons-solid';
import React from 'react';

import { Button } from '.';

export default {
  component: Button,
  title: 'Core | Button',
};

export const normal = () => <Button>Ajouter une mesure</Button>;

export const outline = () => <Button variant="outline">outline button</Button>;

export const loading = () => <Button isLoading>loading button</Button>;

export const withIcon = () => <Button renderIcon={() => <Trash />}>button with icon</Button>;

export const outlineWithIcon = () => <Button variant="outline" renderIcon={() => <Trash />}>outline button with icon</Button>;


normal.story = {
  name: 'button',
};
