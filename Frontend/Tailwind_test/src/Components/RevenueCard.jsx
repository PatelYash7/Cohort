import React from 'react'

function RevenueCard(
    {
        title,
        orderCount,
        amount,
    }) {
  return (
    <div className='bg-white shadow-md rounded p-4'>
        <div className='text-gray-700'>
            <div className='flex gap-2 items-center justify-start'>
                <div className=' font-normal'>
                    {title}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
            </div> 
        </div>
        <div className='flex justify-between items-center pt-2'>
            <div className=' text-4xl font-semibold'>
                $ {amount}
            </div>
           {
            orderCount ?  
            <div className='flex  flex-row items-center'>
                <div className='  text-blue-box  underline '>
                    {orderCount} Orders
                </div>
                <div className='text-blue-box font-medium'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div> :null
           }
        </div>
    </div>
  )
}

export default RevenueCard