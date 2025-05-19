import { create } from 'zustand';
import { createAuthSlice } from './slices/authSlice';
import { createCartSlice } from './slices/cartSlice';
import { createUiSlice } from './slices/uiSlice';
import { shallow } from 'zustand/shallow';

export const useStore = create((...a) => ({
  ...createAuthSlice(...a),
  ...createCartSlice(...a),
  ...createUiSlice(...a),
}));

export { shallow };
