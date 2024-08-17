import { createSlice } from '@reduxjs/toolkit';
import productData from '../assets/product.json'; // Importing JSON data directly

const productsSlice = createSlice({
  name: 'products',
  initialState: productData.products || [],
  reducers: {},
});

export default productsSlice.reducer;