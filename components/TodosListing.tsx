import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card } from '@/components/ui/card'
import { Timer } from 'lucide-react'
import type { TodoTypes } from '@/types/note'

interface TodosListingProps {
  todos: TodoTypes[]
}

const TodosListing = ({ todos }: TodosListingProps) => {
  const completedTodos = todos.filter(todo => !todo.isCompleted)
  console.log('****todos******', completedTodos)
  return (
    <div>
      <h2 className='text-xl'>Completed Tasks</h2>
      {completedTodos.length > 0 ? (
        <>
          {todos.map(todo => (
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
                <p className='text-zinc-400 line-through'>{todo.todo}</p>
              </div>
              <p className='text-zinc-300'>Today</p>
            </Card>
          ))}
        </>
      ) : (
        <Card>No Todos added.</Card>
      )}
    </div>
  )
}
export default TodosListing
