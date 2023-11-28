import React from 'react'
import ListItem from './list-item'

export default function TodoList({ data }) {
    

    return (
        <ul className='w-full h-[300px] rounded-xl bg-primary-100 overflow-auto'>
            {
                data && data?.map((item, idx) => 
                    <ListItem 
                        key={idx}
                        todo={item}
                    />
                )
            }
        </ul>
    )
}
