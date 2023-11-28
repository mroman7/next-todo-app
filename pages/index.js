import Image from 'next/image'
import { Inter } from 'next/font/google'
import Avatar from '@/components/elements/avatar'
import Input from '@/components/elements/input'
import PlusIcon from '@/icons/PlusIcon'
import Dropdown from '@/components/dropdown/dropdown'
import { useState } from 'react'
import EmptyState from '@/components/dropdown/empty-state'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [todos, setTodos] = useState([]);

  return (
    <main className='bg_img h-screen overflow-auto flex items-center justify-center'>
      <section className="w-full sm:w-10/12 md:w-8/12 xl:w-4/12 p-4 mx-auto">

        <Avatar
          avatar_url={"/images/profile.jpg"}
        />

        <div className="w-full xs:w-[400px] mt-6 mx-auto">
          <Input
            name='new_todo'
            placeholder='Add New Task'
            rightIcon={<button type='button' className='w-fit bg-primary-400 rounded p-1 hover:bg-opacity-60'><span className='w-5 h-5 block'><PlusIcon /></span></button>}
          />

          <Dropdown>
            {
              todos && todos?.length > 0 ?
                ""
                :
                <EmptyState />

            }
          </Dropdown>
        </div>



      </section>
    </main>
  )
}

