import React from 'react'

function RevenueCard(
    {
        title,
        orderCount,
        amount,
    }) {
  return (
    <div className='bg-white shadow-sm rounded'>
        <div>
            {title}
        </div>
        <div className='flex justify-between'>
            <div>
                {amount}
            </div>
            <div>
            {orderCount}
            </div>
        </div>
    </div>
  )
}

export default RevenueCard