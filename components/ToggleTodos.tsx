'use client'

import { ChevronDown, ChevronUp, Dot } from 'lucide-react'
import { useState } from 'react'
import TodosListing from './TodosListing'
import type { TodoTypes } from '@/types'

interface ToggleTodosProps {
  todos: TodoTypes[]
  elapsedTime: number
}

const ToggleTodos = ({ todos, elapsedTime }: ToggleTodosProps) => {
  const [showTodos, setShowTodos] = useState<boolean>(false)
  return (
    <>
      <div
        className='mx-auto mb-5 mt-20 flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-1'
        onClick={() => {
          console.log(showTodos)
          setShowTodos(show => !show)
        }}
      >
        <p className='text-sm'>{showTodos ? 'Hide' : 'Show'} Completed Tasks</p>
        {showTodos ? <ChevronUp /> : <ChevronDown />}
      </div>
      <div className='pb-10'>
        {showTodos && (
          <>
            <h2 className='text-xl'>
              Completed Tasks <Dot className='inline size-10 text-lime-500' />{' '}
              {elapsedTime}h
            </h2>
            <TodosListing todos={todos} />
          </>
        )}
      </div>
    </>
  )
}

export default ToggleTodos
