import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmedOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from '../Store/Order/action';
import { Trash2 } from 'lucide-react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const menuItems = [
  {
  id:1,title:"Confirmed order"
  },
  {
    id:2,title:"Shipped order"
  },
  {
    id:3,title:"Delivered order"
  }
]

const Orders = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrders())
  }, [orders.confirmed,orders.delivered,orders.ship,orders.delete])

  const handleStatus = (Obj) => {
    switch (Obj.action) {
      case "Confirmed order":
        dispatch(confirmedOrder(Obj.orderId))
        return
      case "Shipped order":
        dispatch(shipOrder(Obj.orderId))
        return
      case "Delivered order":
        dispatch(deliverOrder(Obj.orderId))
        return
      default:
        return null;
    }
  }

  // rendering drop down here
  const renderDropDown = (orderId) => {

    return(
      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset hover:bg-indigo-100">
          Status
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-blue-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-40 mt-1 w-40 origin-top-right rounded-md bg-indigo-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
              menuItems.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <span
                      onClick={()=> handleStatus({action:item.title,orderId})}
                      className={classNames(
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-700',
                        'block px-4 py-1 text-sm hover:bg-indigo-100 hover:text-blue-400 cursor-pointer'
                      )}
                    >
                      {item.title}
                    </span>
                  )}
                </Menu.Item>
              ))
            }
          </div>
        </Menu.Items>
      </Transition>
      </Menu>
    )
  }

  // const renderDropDown = (orderId) => {
  //   return (
  //     <div className="relative inline-block text-left">
  //       <div>
  //         <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset hover:bg-indigo-100">
  //           Status
  //           <ChevronDownIcon className="-mr-1 h-5 w-5 text-blue-400" aria-hidden="true" />
  //         </button>
  //       </div>
  
  //       <div className="absolute right-0 mt-1 w-40 origin-top-right rounded-md bg-indigo-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[1000]">
  //           <div className="py-1">
  //             {menuItems.map((item) => (
  //               <span
  //                 key={item.id}
  //                 onClick={() => handleStatus({ action: item.title, orderId })}
  //                 className="block px-4 py-1 text-sm hover:bg-indigo-100 hover:text-blue-400 cursor-pointer"
  //               >
  //                 {item.title}
  //               </span>
  //             ))}
  //           </div>
  //         </div>
  //     </div>
  //   );
  // };
  

  // delete orders
  const handeleteDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
  }



  return (
    <div className="px-4 sm:px-6 border border-gray-300 rounded-lg">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle p-3">
            <h1 className='text-2xl text-blue-600 font-bold'>All Orders</h1>
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
                    Price
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Quantity
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Update
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {orders?.orders?.map((product) => (
                  <tr key={product._id}>
                    <td className="py-3 px-2 text-sm">
                      <div className="isolate flex -space-x-2 overflow-hidden">
                         {product?.orderItems?.map((item) => (
                            <img key={item._id} className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white" src={item.product.imageUrl} alt="product-img" />
                            ))} 
                      </div>
                    </td>
                    <td className="py-3 pl-4 pr-3 text-center text-xs sm:pl-0">
                       {product.orderItems.map((item) => (
                          <h1 key={item._id} className="font-medium text-gray-500 text-truncate">{item.product.title}</h1>
                       ))} 
                    </td>
                    <td className="py-3 px-3 text-center text-sm text-gray-500">
                        {product.totalPrice}
                    </td>
                    <td className="text-gray-500 py-3 pl-3 text-center text-sm font-medium">
                        {product.totalItem}
                    </td>
                    <td className={`${product.orderStatus === "CONFIRMED" ? "text-blue-400":product.orderStatus === "PENDING" ? "text-red-500":product.orderStatus === "PLACED" ? "text-blue-500":product.orderStatus === "SHIPPED" ? "text-green-300":"text-green-600"} py-3 pl-3 text-center text-sm font-medium`}>
                        {product.orderStatus} 
                    </td>
                     <td className="text-gray-500 py-3 pl-3 text-center text-sm font-medium">
                        {renderDropDown(product._id)}
                     </td>
                    <td className="text-gray-500 py-3 pl-5 text-center text-sm font-medium">
                    <button
                        type="button"
                        onClick={()=>handeleteDeleteOrder(product._id)}
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
    // <h1>hello orders</h1>
  )
}

export default Orders