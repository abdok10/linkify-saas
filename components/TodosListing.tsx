import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card } from '@/components/ui/card'
import { Timer } from 'lucide-react'
import type { TodoTypes } from '@/types'
import { cn } from '@/utils'

interface TodosListingProps {
  todos: TodoTypes[]
}

const TodosListing = ({ todos }: TodosListingProps) => {
  const isCompleted = todos[0].isCompleted
  return (
    <>
      {todos.length > 0 &&
        todos.map(todo => (
          <Card
            key={todo.id}
            className='mt-2 flex items-center justify-between px-5 py-3'
          >
            <div className='flex items-center gap-2'>
              <form>
                <RadioGroup>
                  <RadioGroupItem value='isCompleted' className='' />
                </RadioGroup>
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
                {!isCompleted && (
                  <div className='flex gap-1'>
                    {Array.from({ length: todo.time }, (_, index) => (
                      <Timer key={index} className='size-4 text-lime-300' />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p className='text-zinc-300'>Today</p>
          </Card>
        ))}
    </>
  )
}
export default TodosListing
