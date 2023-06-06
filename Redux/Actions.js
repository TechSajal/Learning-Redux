import {Add_ITEM, REMOVE_ITEM,Redux_Saga} from './ActionTypes';

export function ReguxSagaApi(){
  return{
    type:Redux_Saga
  }
}
export const addItemToCart = data => ({
  type: Add_ITEM,
  payload: data,
});

export const RemoveItemFromCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});
