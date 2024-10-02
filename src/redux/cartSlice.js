import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, variantId, color, colorHex, size, image, title, price } = action.payload;
    
      const itemInCart = state.cart.find(
        (item) => item.id === id && item.variantId === variantId
      );
    
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          id,
          variantId,
          color, 
          colorHex,
          size,  
          image,
          title,
          price,
          quantity: 1,
        });
      }
    },
    
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.variantId === action.payload); // Vérifie par l'ID du variant
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.variantId === action.payload); // Vérifie par l'ID du variant
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.variantId !== action.payload); // Supprime par variantId
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
