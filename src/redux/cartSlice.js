import { createSlice,createSelector } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    deliveryPrice:15,
    freeDeliveryFrom:200,
    subTotal:0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem:(state,action) => {
            const {product, size }= action.payload;
            const newItem = state.items.find((item) => (
                item.product.id === product.id
            ))
            if(newItem){
                newItem.quantity += 1
            }else{
                state.items = [...state.items,{product:product,quantity:1, size:size}]
            }
        },
        removeCartItem:(state,action) => {
            const { id } = action.payload
            state.items = state.items.filter(({product}) => product.id !== id) 
      
},
changeQuantity:(state,action) => {
  const {productId, amount } = action.payload;
  cartItem = state.items.find((item) => item.product.id === productId);
  if(cartItem){
    cartItem.quantity += amount
  }
  if(cartItem.quantity <= 0){
    state.items = state.items.filter(({product}) => product.id !== productId) 
  }
}
        
       
      
       
    }
})

export const selectNumberOfItems = (state) => state.items.items.length;

export const selectSubtotal = (state) =>
  state.items.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

 const selectSelf = (state) => state.items;

export const selectDeliveryPrice = createSelector(
  selectSelf,
  selectSubtotal,
  (state, subtotal) =>
    subtotal > state.freeDeliveryFrom ? 0 : state.deliveryPrice
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);
