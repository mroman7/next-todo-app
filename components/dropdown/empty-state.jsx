import React from 'react'

export default function EmptyState() {
    return (
        <div className='w-full h-[200px] bg-gray-200 rounded-md bg-opacity-90 flex items-center justify-center'>
            <h6 className='text-base text-gray-700'>No tasks today</h6>
        </div>
    )
}
