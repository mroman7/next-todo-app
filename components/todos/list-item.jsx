import { useAppContext } from '@/context/app-context';
import CheckCircleIcon from '@/icons/CheckCircleIcon'
import DotIcon from '@/icons/DotIcon';
import PlusIcon from '@/icons/PlusIcon';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'

export default function ListItem({ todo }) {

    const { handleUpdateTodo, handleUpdateTodoStatus, handleDeleteTodo } = useAppContext();
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [todoTitle, setTodoTitle] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (e) => {
        setTodoTitle(e.target.value);
    }

    const updateTitle = () => {
        handleUpdateTodo(
            todoTitle,
            todo?._id
        )
        setIsEdit(false);
    }

    const handleChangeStatus = () => {
        handleUpdateTodoStatus(
            todo?.status === "pending" ? "completed" : "pending",
            todo?._id
        )
    }

    const deleteCurrentTodo = () => {
        setToggleDropdown(false);
        handleDeleteTodo(todo?._id);
    }

    useEffect(() => {
        setTodoTitle(todo?.title);
    }, []);

    return (
        <li className='p-0'>
            <div className='flex items-center gap-2 w-full bg-primary-100 border-b border-primary-400  border-opacity-50 px-2.5 py-3 '>
                <button
                    type='button'
                    className={`bg-transparent border-none p-1 hover:stroke-primary-500 ${todo?.status == "pending" ? 'fill-transparent stroke-primary-400' : 'fill-primary-400 stroke-primary-100'}`}
                    onClick={handleChangeStatus}
                >
                    <span className='w-6 block'><CheckCircleIcon /></span>
                </button>
                {
                    isEdit ?
                        <div className='flex justify-between items-center'>
                            <input
                                type='text'
                                value={todoTitle}
                                onChange={(e) => handleChange(e)}
                                className='bg-transparent focus-within:outline-none w-full'
                            />
                            <button
                                type='button'
                                onClick={updateTitle}
                                className='w-fit bg-primary-400 rounded p-1 hover:bg-opacity-60'
                            >
                                <span className='block'><PlusIcon /></span>
                            </button>
                        </div>
                        :
                        <p
                            onClick={() => setIsEdit(true)}
                            className={`${todo.status == "completed" ? 'line-through' : ''}`}
                        >{todo?.title}</p>
                }
                <button
                    type='button'
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                    className='ml-auto hover:bg-primary-400 bg-opacity- p-1 rounded-md'
                >
                    <span className='block'><DotIcon /></span>
                </button>
            </div >

            <div className={`bg-white overflow-hidden transition-all duration-300 ${toggleDropdown ? 'h-full opacity-100 visible py-4 px-2.5' : 'p-0 h-0 opacity-0 invisible'}`}>
                <p className='text-sm'><b>Completed:</b> {todo.status === "pending" ? "Not Completed" : "Completed"}</p>
                <p className='text-sm'><b>Created At:</b> {dayjs(todo?.created_at).format("MM/DD/YYYY, h:mm A")}</p>
                <button
                    type='button'
                    className='mt-2 bg-red-300 text-red-500 w-full rounded-md text-center px-4 py-2'
                    onClick={deleteCurrentTodo}
                >
                    Delete
                </button>
            </div>
        </li >
    )
}
