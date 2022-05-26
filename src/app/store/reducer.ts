import { ActionsUnion, ActionTypes } from './actions';

export const initialState = {
  items: [],
  cart: []
};

export function ShopReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    default:
      return state;
  }
}
