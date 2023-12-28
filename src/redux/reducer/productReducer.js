import {createSlice} from "@reduxjs/toolkit";
import {addProduct, editProduct, getAllProduct, getProductById, removeProduct} from "../services/productService";

const initialState = {
    list: [],
    product: {
        title: '',
        price:'',
        description: ''
    }
};

const productSlice = createSlice({
    name:'Product',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllProduct.fulfilled, (state, {payload}) => {
            state.list = payload;
        })
        builder.addCase(addProduct.fulfilled, (state, {payload}) => {
            state.list.push(payload);
        })
        builder.addCase(removeProduct.fulfilled, (state, {payload}) => {
            state.list.splice(state.list.indexOf(payload));
        })
        builder.addCase(editProduct.fulfilled, (state,{payload}) => {
            state.list[state.list.indexOf(payload)] = payload;
        })
        builder.addCase(getProductById.fulfilled,(state, {payload}) => {
            state.product =  payload.data;
        })
    }
})

export default productSlice.reducer;
