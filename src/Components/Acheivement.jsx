import React from 'react'

const Acheivement = () => {
  return (
    <div className='py-2 px-2'>
        <div>
            <h1 className='text-lg font-medium'>Welcome Surendra</h1>
            <p className='my-1'>Congratualtions &#129395; </p>
        </div>
        <div className='flex items-center justify-between'>
            <div>
                <h3 className='text-sm font-medium lg:text-lg my-1'>420k</h3>
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    View Sales
                </button>
            </div>
            <img src="../src/assets/trophy.jpg" alt="acheivement" className='h-28 w-28' />
        </div>
    </div>
  )
}

export default Acheivement