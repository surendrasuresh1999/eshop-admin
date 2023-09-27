import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Store/Product/action';

const initialSizes = [
  {name:"S",quantity:""},
  {name:"M",quantity:""},
  {name:"L",quantity:""},
]
const CreateProduct = () => {
  const dispatch = useDispatch();

  const [productData,setProductData] = useState({
    imageUrl:"",
    brand:"",
    title:"",
    color:"",
    discountedPrice:"",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "Men",
    secondLavelCategory: "Clothing",
    thirdLavelCategory: "mens_kurta",
    description:""
  })

  const handleOnChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]:event.target.value
    })
  }

  const handleCategoryChange = (event) => {
    const { name, value } = event.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
    const sizes = [...productData.size];
    sizes[index] = { ...sizes[index], [name]: Number(value) };
    setProductData({ ...productData, size: sizes });
  };
  
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct(productData))
    setProductData({imageUrl:"",title:"",brand:"",price:"",discountedPrice:"",discountPersent:"",description:"",quantity:"",color:"",topLavelCategory:"Men",secondLavelCategory:"Clothing",thirdLavelCategory:"mens_kurta",size:initialSizes})
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <div className="pb-12">
          <h2 className="text-2xl font-bold leading-7 text-blue-600">Add New Product</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="product-image" className="block text-sm font-medium leading-6 text-gray-900">
                ImageUrl
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="imageUrl"
                  id="product-image"
                  value={productData.imageUrl}
                  onChange={handleOnChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="product-brand" className="block text-sm font-medium leading-6 text-gray-900">
                Brand
              </label>
              <div className="mt-2">
                <input
                  id="product-brand"
                  onChange={handleOnChange}
                  name="brand"
                  value={productData.brand}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="product-title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  value={productData.title}
                  onChange={handleOnChange}
                  id="product-title"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="product-color" className="block text-sm font-medium leading-6 text-gray-900">
                Color
              </label>
              <div className="mt-2">
                <input
                  id="product-color"
                  value={productData.color}
                  onChange={handleOnChange}
                  name="color"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="discount" className="block text-sm font-medium leading-6 text-gray-900">
              DiscountPrice
              </label>
              <div className="mt-2">
                <input
                  id="discount"
                  onChange={handleOnChange}
                  name="discountedPrice"
                  value={productData.discountedPrice}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="product-price" className="block text-sm font-medium leading-6 text-gray-900">
              Price
              </label>
              <div className="mt-2">
                <input
                  id="product-price"
                  name="price"
                  value={productData.price}
                  onChange={handleOnChange}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="discount-percent" className="block text-sm font-medium leading-6 text-gray-900">
              DiscountPercent
              </label>
              <div className="mt-2">
                <input
                  id="discount-percent"
                  onChange={handleOnChange}
                  name="discountPersent"
                  value={productData.discountPersent}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="product-quantity" className="block text-sm font-medium leading-6 text-gray-900">
              Quantity
              </label>
              <div className="mt-2">
                <input
                  id="product-quantity"
                  onChange={handleOnChange}
                  name="quantity"
                  value={productData.quantity}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="category-1" className="block text-sm font-medium leading-6 text-gray-900">
                TopLevelCategory
              </label>
              <div className="mt-2">
                <select
                  id="category-1"
                  name="topLavelCategory"
                  value={productData.topLavelCategory}
                  onChange={handleCategoryChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="category-2" className="block text-sm font-medium leading-6 text-gray-900">
                SecondLevelCategory
              </label>
              <div className="mt-2">
                <select
                  id="category-2"
                  name="secondLavelCategory"
                  type="text"
                  value={productData.secondLavelCategory} // Set the selected value
                  onChange={handleCategoryChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Clothing">Clothing</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Brands">Brands</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="category-3" className="block text-sm font-medium leading-6 text-gray-900">
                ThirdLevelCategory
              </label>
              <div className="mt-2">
                <select
                  id="category-3"
                  name="thirdLavelCategory"
                  type="text"
                  value={productData.thirdLavelCategory}
                  onChange={handleCategoryChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value ="Tops">Tops</option>
                  <option value ="Dresses">Dresses</option>
                  <option value="T-shirts">T-shirts</option>
                  <option value="Saree">Saree</option>
                  <option value="Lengha Choli">Lengha Choli</option>
                  <option value="mens_kurta">Mens_Kurta</option>
                </select>
              </div>
            </div>

            {
              initialSizes.map((data, index) => (
                <li key={index} className="sm:col-span-2 list-none">
                  <div className="flex items-center gap-3 justify-between">
                    <div className="w-full">
                      <label
                        htmlFor={`product-size-${data.id}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Size
                      </label>
                      <div className="mt-2">
                        <input
                          id={`product-size-${data.name}`}
                          name="name"
                          placeholder={`${data.name}`}
                          onChange={(e) => handleSizeChange(e, index)}
                          type="text"
                          readOnly
                          className="block w-full placeholder:text-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor={`product-quantity-${data.id}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Quantity
                      </label>
                      <div className="mt-2">
                        <input
                          id={`product-quantity-${data.name}`}
                          name="quantity"
                          onChange={(e) => handleSizeChange(e, index)}
                          value={productData.size[index].quantity}
                          placeholder="0"
                          type="number"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))
            }

            <div className="sm:col-span-2">
              <label htmlFor="productDiscription" className="block text-sm font-medium leading-6 text-gray-900">
              Description
              </label>
              <div className="mt-2">
                <input
                  id="productDiscription"
                  onChange={handleOnChange}
                  value={productData.description}
                  name="description"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
          </div>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 my-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Product
          </button>
      </div>      
    </form>
  )
}

export default CreateProduct