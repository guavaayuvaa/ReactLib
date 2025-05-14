export const initialState = {
  step: 1,
  personal: { name: '', email: '' },
  address: { city: '', zip: '' },
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'NEXT':
      return { ...state, step: state.step + 1 };
    case 'PREV':
      return { ...state, step: state.step - 1 };
    case 'UPDATE_PERSONAL':
      return { ...state, personal: { ...state.personal, ...action.payload } };
    case 'UPDATE_ADDRESS':
      return { ...state, address: { ...state.address, ...action.payload } };
    default:
      return state;
  }
}
