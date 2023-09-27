import { Trash2 } from 'lucide-react'
import React from 'react'

const Table = (props) => {
  return (
    <div className="px-4 sm:px-6 border border-gray-300 rounded-lg">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle p-3">
            <h1 className='text-2xl text-blue-600 font-bold'>All Products</h1>
            <table className="min-w-full divide-y divide-gray-300 my-2">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Image
                  </th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0">
                    Title
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Quantity
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {props?.data.map((product) => (
                  <tr key={product._id}>
                    <td className="py-3 px-2 text-sm">
                        <img className="h-11 w-11 rounded-full" src={product.imageUrl} alt="product-img" />
                    </td>
                    <td className="py-3 pl-4 pr-3 text-center text-sm sm:pl-0">
                        <h1 className="font-medium text-gray-500 text-truncate">{product.title}</h1>
                    </td>
                    <td className="py-3 px-3 text-center text-sm text-gray-500">
                      <h2 className="text-gray-500">{product.category.name}</h2>
                    </td>
                    <td className="py-3 px-3 text-center text-sm text-gray-500">
                        {product.price}
                    </td>
                    {/* <td className="whitespace-nowrap px-3  text-sm text-gray-500">{person.role}</td> */}
                    <td className="text-gray-500 py-3 pl-3 text-center text-sm font-medium">
                        {product.quantity}
                    </td>
                    <td className="text-gray-500 py-3 pl-5 text-center text-sm font-medium">
                    <button
                        type="button"
                        onClick={()=>handleDeleteProduct(product._id)}
                        className="rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-200"
                    >
                        <Trash2 color="#3017ee" />
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Table