import Image from 'next/image'
import { Inter } from 'next/font/google'
import Avatar from '@/components/elements/avatar'
import Input from '@/components/elements/input'
import PlusIcon from '@/icons/PlusIcon'
import Dropdown from '@/components/dropdown/dropdown'
import EmptyState from '@/components/dropdown/empty-state'
import TodoList from '@/components/todos/todo-list'
import { useAppContext } from '@/context/app-context'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { todos, createNewTodo } = useAppContext();
  const [newTodo, setNewTodo] = useState("");

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (newTodo?.length > 0) {
      createNewTodo(newTodo);
      setNewTodo("");
    } else {
      alert("Please Enter Todo Title");
    }
  }

  return (
    <main className='bg_img min-h-screen h-full py-8 overflow-auto flex items-center justify-center'>
      <section className="w-full sm:w-10/12 md:w-8/12 xl:w-4/12 p-4 mx-auto">

        <Avatar
          avatar_url={"/images/profile.jpg"}
        />

        <div className="w-full xs:w-[400px] mt-6 mx-auto">
          <form onSubmit={handleCreateTask}>
            <Input
              name='new_todo'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder='Add New Task'
              rightIcon={<button type='submit' className='w-fit bg-primary-400 rounded p-1 hover:bg-opacity-60'><span className='block'><PlusIcon /></span></button>}
            />
          </form>

          <Dropdown>
            {
              todos && todos?.length > 0 ?
                <TodoList
                  data={todos}
                />
                :
                <EmptyState />
            }
          </Dropdown>
        </div>



      </section>
    </main>
  )
}

