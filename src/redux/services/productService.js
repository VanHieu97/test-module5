import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk(
    'products/getAll',
    async () => {
        let res = await axios.get("http://localhost:8080/products");
        return res.data;
    }
)

export const addProduct = createAsyncThunk(
    'products/add',
    async (newProduct) => {
        return await axios.post("http://localhost:8080/products", newProduct).then(res => res.data);
    }
)

export const removeProduct = createAsyncThunk(
    'products/remove',
    async (id) => {
        return await axios.delete(`http://localhost:8080/products/` + id);
    }
)

export const editProduct = createAsyncThunk(
    'products/edit',
    async (newProduct) => {
        return await axios.put("http://localhost:8080/products/" + newProduct.id, newProduct)
    }
)
export const getProductById = createAsyncThunk(
    'products/getProductById',
    async (id) => {
        return  await axios.get(`http://localhost:8080/products/` + id);
    }
)