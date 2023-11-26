export const initialState = {
    cartItems: [],
  };
  
  export const cartReducer = (state, action) => {
    switch (action.type) {

      
      case 'ADD_ITEM_TO_CART':
        
      const isItemPresent =  state?.cartItems?.find(item  => item?.id === action?.payload?.id)
        if (isItemPresent) {
            return {
                ...state,
                cartItems: state?.cartItems?.map((x) =>
                  x.id === isItemPresent?.id ? action.payload : x
                ),
              };
          }else{
             return { ...state, cartItems: [...state?.cartItems, action.payload] };
          }

        case 'INCREASE_ITEM_QUANTITY':
                return {
                ...state,
                cartItems: state?.cartItems?.map((x) =>
                    x.id === action.payload?.id ? { ...x, quantity: x.quantity + 1 } : x
                ),
                };
        
        case 'DECREASE_ITEM_QUANTITY':
                return {
                ...state,
                cartItems: state?.cartItems?.map((x) =>
                    x.id === action.payload?.id ? { ...x, quantity: x.quantity - 1 } : x
                ).filter((x) => x.quantity > 0), 
                };      
       default:
        return state;
    }
  };
  