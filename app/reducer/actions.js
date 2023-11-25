export const addItemToCart = (dispatch, item) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: {...item} });
  };
  
  export const removeItemFromCart = (dispatch, item) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: item });
  };
  
  export const increaseItemQuantity = (dispatch,item) => {
    dispatch({ type: 'INCREASE_ITEM_QUANTITY', payload: item });
  }

  export const decreaseItemQuantity = (dispatch,item) => {
    dispatch({ type: 'DECREASE_ITEM_QUANTITY', payload: item });
  }
  