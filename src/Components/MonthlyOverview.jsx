import { IndianRupee, TrendingUp, Users2 } from 'lucide-react'
import React from 'react'

const data = [
    {
        id:1,title:"Sales",value:"245k",icon:<TrendingUp color="#fff" />,bgColor:"bg-blue-300"
    },
    {
        id:2,title:"Customers",value:"245k",icon:<Users2 color="#fff" />,bgColor:"bg-green-500"
    },
    {
        id:3,title:"Products",value:"245k",icon:<Users2 color='#fff' />,bgColor:"bg-yellow-300"
    },
    {
        id:4,title:"Revenue",value:"245k",icon:<IndianRupee color='#fff' />,bgColor:"bg-orange-400"
    }


]

const MonthlyOverview = () => {
  return (
    <div className='py-2 px-2 h-full flex flex-col justify-between'>
        <div>
            <h1 className='text-lg font-medium'>Monthly Overview</h1>
            <p className='my-1'>Total 45% growth &#128526; this month </p>
        </div>
        <div className='grid grid-cols-2 gap-6 md:gap-4 md:grid-cols-4 py-4'>
            {data.map((item) => 
                <li key={item.id} className='flex gap-3'>
                    <div className={`p-[10px] rounded-md ${item.bgColor} flex justify-center items-center`}>
                        {item.icon}
                    </div>
                    <div>
                        <h4 className='text-xs font-semibold lg:text-base'>{item.title}</h4>
                        <p className='text-sm font-medium lg:text-lg'>{item.value}</p>
                    </div>
                </li>
            )}
        </div>
    </div>
  )
}

export default MonthlyOverview