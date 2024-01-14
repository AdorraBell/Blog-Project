import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import React from 'react';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (storyFn: () => React.ReactNode) => (
  <StoreProvider initialState={state}>
    {storyFn()}
  </StoreProvider>
);
