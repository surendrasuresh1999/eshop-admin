import { CREATE_PRODUCT_BY_ID_FAILURE, CREATE_PRODUCT_BY_ID_REQUEST, CREATE_PRODUCT_BY_ID_SUCCESS, DELETE_PRODUCT_BY_ID_FAILURE, DELETE_PRODUCT_BY_ID_REQUEST, DELETE_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./actionType";

const initialState = {
    products:[],
    product:null,
    loading:false,
    error:null
}

export const customerProductReducer = (state=initialState,action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case DELETE_PRODUCT_BY_ID_REQUEST:
        case CREATE_PRODUCT_BY_ID_REQUEST:
            return {...state, loading:true,error:null}
            
        case FIND_PRODUCTS_SUCCESS:
            return {...state,loading:false,products:action.payload,error:null}
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state,loading:false,product:action.payload,error:null}
        case DELETE_PRODUCT_BY_ID_SUCCESS:
            return {...state,loading:false,products:state.products.filter((item) => item._id !== action.payload),error:null}
        case CREATE_PRODUCT_BY_ID_SUCCESS:
            return {...state,loading:false,product:action.payload,error:null}
            
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state,loading:false,error:action.payload}
        case DELETE_PRODUCT_BY_ID_FAILURE:
            return {...state,loading:false,error:action.payload}
        case CREATE_PRODUCT_BY_ID_FAILURE:
            return {...state,loading:false,error:action.payload}
                
        default:
            return state;
    }
}