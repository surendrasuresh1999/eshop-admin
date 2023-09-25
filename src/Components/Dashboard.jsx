import React from 'react'
import Acheivement from './Acheivement'
import MonthlyOverview from './MonthlyOverview'

const Dashboard = () => {
  return (
    <div>
        <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-12 md:col-span-4 rounded-lg border border-gray-400'>
                <Acheivement />
            </div>
            <div className='col-span-12 md:col-span-8 rounded-lg border border-gray-400'>
                <MonthlyOverview />
            </div>
        </div>
    </div>
  )
}

export default Dashboard