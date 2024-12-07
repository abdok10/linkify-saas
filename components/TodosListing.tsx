'use client'

import { useState } from 'react'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Card } from '@/components/ui/card'
import { Timer, Trash } from 'lucide-react'
import type { TodoTypes } from '@/types'
import { cn } from '@/utils'
import { checkTodo, deleteTodo } from '@/actions/todos'

interface TodosListingProps {
  todos: TodoTypes[]
}

const TodosListing = ({ todos }: TodosListingProps) => {
  const [theTodos, setTheTodos] = useState(todos)

  const handleCheck = async (todoId: number, isChecked: boolean) => {
    setTheTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId ? { ...todo, isCompleted: isChecked } : todo
      )
    )

    await checkTodo(todoId, isChecked)
  }

  return (
    <>
      {theTodos.length > 0 &&
        theTodos.map(todo => (
          <Card
            key={todo.id}
            className='mt-2 flex items-center justify-between px-5 py-3'
          >
            <div className='flex items-center gap-2'>
              <form>
                {/* <RadioGroup>
                  <RadioGroupItem value='isCompleted' className='' />
                </RadioGroup> */}
                <Checkbox
                  checked={todo.isCompleted}
                  onCheckedChange={(isChecked: boolean) => {
                    handleCheck(todo.id, isChecked)
                    setTheTodos(prevTodos =>
                      prevTodos.map(t =>
                        t.id === todo.id ? { ...t, isCompleted: isChecked } : t
                      )
                    )
                  }}
                />
              </form>
              <Timer className='size-5' />
              <div>
                <p
                  className={cn(
                    todo.isCompleted && 'text-zinc-400 line-through'
                  )}
                >
                  {todo.todo}
                </p>
                {/* {!isCompleted && ( */}
                <div className='flex gap-1'>
                  {Array.from({ length: todo.time }, (_, index) => (
                    <Timer key={index} className='size-4 text-lime-300' />
                  ))}
                </div>
                {/* // )} */}
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-zinc-300'>Today</p>
              <Trash
                className='size-5 cursor-pointer'
                onClick={() => {
                  deleteTodo(todo.id)
                  setTheTodos(prevTodos =>
                    prevTodos.filter(t => t.id !== todo.id)
                  )
                }}
              />
            </div>
          </Card>
        ))}
    </>
  )
}
export default TodosListing
