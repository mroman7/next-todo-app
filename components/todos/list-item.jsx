import { useAppContext } from '@/context/app-context';
import CheckCircleIcon from '@/icons/CheckCircleIcon'
import DotIcon from '@/icons/DotIcon';
import dayjs from 'dayjs';
import React, { useState } from 'react'

export default function ListItem({ todo }) {

    const { handleUpdateTodo, handleUpdateTodoStatus, handleDeleteTodo } = useAppContext();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [itemData, setItemData] = useState(todo);

    const handleChange = (e) => {
        setItemData({
            ...itemData, 
            title: e.target.value
        })
    }

    const submitUpdateTitle = (e) => {

        if(e.keyCode == 13) {
            handleUpdateTodo(
                itemData?.title, 
                itemData?._id
            )
        }
    }
    const handleChangeStatus = () => {
        setItemData({
            ...itemData, 
            status: itemData?.status === "pending" ? "completed" : "pending",
        })
        handleUpdateTodoStatus(
            itemData?.status === "pending" ? "completed" : "pending", 
            itemData?._id
        )
    }

    const deleteCurrentTodo = () => {
        handleDeleteTodo(itemData?._id);
    }

    return (        
        <li className='p-0'>
            <div className='flex items-center gap-2 w-full bg-primary-100 border-b border-primary-400  border-opacity-50 px-2.5 py-3 '>
                <button 
                    type='button' 
                    className={`bg-transparent border-none p-1 hover:stroke-primary-500 ${itemData?.status == "pending" ? 'fill-transparent stroke-primary-400' : 'fill-primary-400 stroke-primary-100' }`}
                    onClick={handleChangeStatus}
                >
                    <span className='w-6 block'><CheckCircleIcon /></span>
                </button>
                {
                    itemData?.status == "pending" ? 
                        <input 
                            type='text'
                            value={itemData?.title}
                            onChange={(e) => handleChange(e)}
                            onKeyDown={submitUpdateTitle}
                            className='bg-transparent focus-within:outline-none w-full'
                        />
                    :
                    <p className='line-through'>{itemData?.title}</p>
                }
                <button 
                    type='button' 
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                    className='ml-auto hover:bg-primary-400 bg-opacity- p-1 rounded-md'
                >
                    <span className='block'><DotIcon /></span>
                </button>
            </div>

            <div className={`bg-white overflow-hidden transition-all duration-300 ${toggleDropdown ? 'h-full opacity-100 visible py-4 px-2.5' : 'p-0 h-0 opacity-0 invisible'}`}>                
                <p className='text-sm'><b>Completed:</b> {itemData.status === "pending" ? "Not Completed" : "Completed"}</p>
                <p className='text-sm'><b>Created At:</b> {dayjs(itemData?.created_at).format("MM/DD/YYYY, h:mm A")}</p>
                <button
                    type='button'
                    className='mt-2 bg-red-300 text-red-500 w-full rounded-md text-center px-4 py-2'
                    onClick={deleteCurrentTodo}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
