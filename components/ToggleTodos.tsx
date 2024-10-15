'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import TodosListing from './TodosListing'
import type { TodoTypes } from '@/types'

const ToggleTodos = ({ todos }: { todos: TodoTypes[] }) => {
  const [showTodos, setShowTodos] = useState<boolean>(false)
  return (
    <>
      <div className='mx-auto mb-5 mt-20 flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-1'>
        <p
          className='text-sm'
          onClick={() => {
            console.log(showTodos)
            setShowTodos(show => !show)
          }}
        >
          {showTodos ? 'Show' : 'Hide'} Completed Tasks
        </p>
        {!showTodos ? <ChevronDown /> : <ChevronUp />}
      </div>
      <div className='pb-10'>
        {showTodos && (
          <>
            <h2 className='text-xl'>Completed Tasks</h2>
            <TodosListing todos={todos} />
          </>
        )}
      </div>
    </>
  )
}

export default ToggleTodos
