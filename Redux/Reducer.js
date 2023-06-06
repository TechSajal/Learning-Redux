import {Add_ITEM, REMOVE_ITEM} from './ActionTypes';

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case Add_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      const deletearray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletearray;
    default:
      return state;
  }
};
