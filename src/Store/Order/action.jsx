
import { api } from "../../config/apiConfig";
import { CANCEL_ORDER_FAILURE, CANCEL_ORDER_REQUEST, CANCEL_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./actionType"

export const getOrders = () => async(dispatch) => {
    dispatch({type:GET_ORDERS_REQUEST})

    try {

        const {data} = await api.get(`/api/admin/orders`)        
        
        dispatch({type:GET_ORDERS_SUCCESS,payload:data})
        
    } catch (error) {
        // console.log("error logged",error)
        dispatch({type:GET_ORDERS_FAILURE,payload:error.message})
    }
}

export const confirmedOrder = (reqData) => async(dispatch) => {
    dispatch({type:CONFIRMED_ORDER_REQUEST})
    try {
        const {data} = await api.put(`/api/admin/orders/${reqData}/confirmed`)
        dispatch({type:CONFIRMED_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:CONFIRMED_ORDER_FAILURE,payload:error.message})
    }
}

export const shipOrder = (reqData) => async(dispatch) => {
    dispatch({type:SHIP_ORDER_REQUEST})

    try {

        const {data} = await api.put(`/api/admin/orders/${reqData}/ship`)

        dispatch({type:SHIP_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:SHIP_ORDER_FAILURE,payload:error.message})
    }
}

export const placeOrder = (reqData) => async(dispatch) => {
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

export const deliverOrder = (reqData) => async(dispatch) => {
    dispatch({type:DELIVERED_ORDER_REQUEST})
    try {

        const {data} = await api.put(`/api/admin/orders/${reqData}/deliver`)        
        
        dispatch({type:DELIVERED_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        // console.log("error logged",error)
        dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message})
    }
}

export const cancelOrder = (reqData) => async(dispatch) => {
    dispatch({type:CANCEL_ORDER_REQUEST})
    
    const orderId = reqData;

    try {

        const {data} = await api.put(`/api/admin/orders/${orderId}/cancel`)  

        dispatch({type:CANCEL_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:CANCEL_ORDER_FAILURE,payload:error.message})
    }
}

export const deleteOrder = (reqData) => async(dispatch) => {
    dispatch({type:DELETE_ORDER_REQUEST})
    try {

        const {data} = await api.delete(`/api/admin/orders/${reqData}/delete`) 

        dispatch({type:DELETE_ORDER_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:DELETE_ORDER_FAILURE,payload:error.message})
    }
}

