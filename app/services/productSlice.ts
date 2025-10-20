import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice ({
    name : "productSlice",
    initialState: {
        showProducts: false,
        selectedCategory: 'beauty',
        selectedProductType: null,
    },
    reducers : {
        toggleProducts: (state) => {
            state.showProducts = !state.showProducts;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setSelectedProductType: (state, action) => {
            state.selectedProductType = action.payload
        }
    },
});

export const { toggleProducts, setSelectedCategory, setSelectedProductType} = productSlice.actions;
export default productSlice.reducer;