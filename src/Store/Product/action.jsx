
import { api } from "../../config/apiConfig";
import { CREATE_PRODUCT_BY_ID_FAILURE, CREATE_PRODUCT_BY_ID_REQUEST, CREATE_PRODUCT_BY_ID_SUCCESS, DELETE_PRODUCT_BY_ID_FAILURE, DELETE_PRODUCT_BY_ID_REQUEST, DELETE_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./actionType"

export const findProducts = (reqData) => async(dispatch) => {
    dispatch({type:FIND_PRODUCTS_REQUEST})
    
    const {colors,sizes,maxPrice,minPrice,minDiscount,category,stock,sort,pageNumber,pageSize} = reqData;

    try {

        const {data} = await api.get(`/api/products?category=${category}`)

        // const {data} = await api.get(`/api/products?category=${category}&color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)

        // console.log("products data in redux=========>", data)
        
        
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
        
    } catch (error) {
        // console.log("error logged",error)
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}

export const findProductsById = (reqData) => async(dispatch) => {
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    
    const productId = reqData;

    try {

        const {data} = await api.get(`/api/products/${productId}`)

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}

export const deleteProductById = (reqData) => async(dispatch) => {
    dispatch({type:DELETE_PRODUCT_BY_ID_REQUEST})
    
    const productId = reqData;
    // console.log("product id received",productId)
    try {

        const {data} = await api.delete(`/api/admin/products/${productId}`)

        dispatch({type:DELETE_PRODUCT_BY_ID_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:DELETE_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}

export const addProduct = (reqData) => async(dispatch) => {
    dispatch({type:CREATE_PRODUCT_BY_ID_REQUEST})
    
    const productData = reqData;
    // console.log("product id received",productData)
    try {

        const {data} = await api.post(`/api/admin/products`,reqData)

        dispatch({type:CREATE_PRODUCT_BY_ID_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:CREATE_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}