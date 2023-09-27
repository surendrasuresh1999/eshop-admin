import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductById, findProducts } from '../Store/Product/action';
import { Trash2 } from 'lucide-react';
import Table from './Table';


const Products = () => {
    const dispatch = useDispatch();
    const {product} = useSelector(store => store);

    useEffect(()=>{
        const data ={
            category:"mens_kurta",
            colors:"",
            sizes:"",
            minPrice:0,
            maxPrice:0,
            minDiscount: 0,
            sort: "price_low",
            pageNumber: 1,
            pageSize:10,
            stock:"in_stock"
          }
        dispatch(findProducts(data))
    },[])
  
    const handleDeleteProduct = (productId) => {
      // console.log(productId)
      dispatch(deleteProductById(productId))
    }
    // product?.products?.content?
  return (
    <>
    {product?.products?.content && <Table data={product?.products?.content} />}
    </>
  )
}

export default Products