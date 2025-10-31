import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface CartState {
  items: Product[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      let newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity++;
    },
    increaseQuantity: (state, action: PayloadAction<string | number>) =>{
      const id = action.payload;
      const item = state.items.find(item => item.id === id)
      if(item){
        item.quantity++;
        state.totalQuantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string | number>) =>{
      const id = action.payload;
      const item = state.items.find(item => item.id === id)
      if(item){
        item.quantity--;
        state.totalQuantity--;
      }
    },
    removeitem: (state, action: PayloadAction<number | string>) => {
      const id = action.payload;
      const itemIndex = state.items.findIndex( item => item.id === id);
      if(itemIndex >= 0){
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.items.splice(itemIndex, 1)
      }
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeitem } = cartSlice.actions;
export default cartSlice.reducer;
