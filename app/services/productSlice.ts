import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice ({
    name : "productSlice",
    initialState: {
        showProducts: false,
        selectedCategory: 'beauty',
    },
    reducers : {
        toggleProducts: (state) => {
            state.showProducts = !state.showProducts;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
});

export const { toggleProducts, setSelectedCategory} = productSlice.actions;
export default productSlice.reducer;