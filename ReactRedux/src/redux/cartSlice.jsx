import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProductIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalAmount += action.payload.price;
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.totalAmount -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    incrementQuantity(state, action) {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        product.quantity++;
        state.totalQuantity++;
        state.totalAmount += product.price;
      }
    },
    decrementQuantity(state, action) {
      const product = state.items.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity--;
        state.totalQuantity--;
        state.totalAmount -= product.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
