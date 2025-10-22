// store/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};
export interface Product {
  id: number | string;
  name: string;
  price: number;
  // Add other product properties as needed (e.g., image, description)
}

// 2. Interface for an item *in* the cart
export interface CartItem extends Product {
  quantity: number;
}

// 3. Interface for the entire cart state
export interface CartState {
  items: CartItem[];
  totalQuantity: number;
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. ADD TO CART: Payload is the Product object
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // TypeScript allows direct modification here thanks to Immer
        existingItem.quantity++;
      } else {
        // Add new item with quantity = 1
        state.items.push({ ...newItem, quantity: 1 } as CartItem);
      }
      state.totalQuantity++;
    },

    // 2. INCREASE/DECREASE QUANTITY: Payload is the product ID
    increaseQuantity: (state, action: PayloadAction<string | number>) => {
      const id = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity++;
        state.totalQuantity++;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<string | number>) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex(item => item.id === id);

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        
        if (item.quantity === 1) {
          // Remove item if quantity is 1
          state.totalQuantity -= item.quantity; // Adjust count before removal
          state.items.splice(itemIndex, 1);
        } else {
          item.quantity--;
          state.totalQuantity--;
        }
      }
    },

    // Optional: Remove item entirely
    removeItem: (state, action: PayloadAction<string | number>) => {
        const id = action.payload;
        const itemIndex = state.items.findIndex(item => item.id === id);

        if (itemIndex >= 0) {
            const item = state.items[itemIndex];
            state.totalQuantity -= item.quantity;
            state.items.splice(itemIndex, 1);
        }
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;