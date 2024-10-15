import { createTodo, getTodos } from '@/actions/todos'
import TodosListing from '@/components/TodosListing'
import ToggleTodos from '@/components/ToggleTodos'
import { Card, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { TodoTypes } from '@/types'
import { ArrowDownUp, Dot, Plus } from 'lucide-react'

const TodosPage = async () => {
  const todos: TodoTypes[] = await getTodos()
  const completedTodos = todos.filter(todo => todo.isCompleted)
  const unCompletedTodos = todos.filter(todo => !todo.isCompleted)

  return (
    <div className='space-y-4 px-5'>
      <div className='flex justify-between'>
        <h1 className='text-2xl'>Today</h1>
        <ArrowDownUp />
      </div>

      {/* Stats Card */}
      <Card className='flex items-center justify-between px-20 py-5'>
        <div className='flex flex-col items-center'>
          <h2>
            <span className='text-3xl font-semibold text-lime-500'>3</span>h
          </h2>
          <CardDescription>Estimated Time</CardDescription>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-semibold text-lime-500'>4</h2>
          <CardDescription>Tasks to be Completed</CardDescription>
        </div>
        <div className='flex flex-col items-center'>
          <h2>
            <span className='text-3xl font-semibold text-lime-500'>5</span>h
          </h2>
          <CardDescription>Elapsed Time</CardDescription>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-semibold text-lime-500'>2</h2>
          <CardDescription>Completed Tasks</CardDescription>
        </div>
      </Card>

      {/* Form */}
      <Card className='border-lime-700'>
        <form
          action={createTodo}
          className='flex items-center justify-between gap-5 px-5 py-2'
        >
          <div className='flex flex-grow items-center justify-center gap-4'>
            <Plus />
            <Input
              id='todo'
              name='todo'
              className='border-none focus-visible:ring-0'
              placeholder='Add a task, press [Enter] to save'
              required
            />
          </div>
          <div className='max-w-20'>
            <Input type='number' name='time' />
          </div>
          <button type='submit' className='hidden' />
        </form>
      </Card>

      {/* Uncompleted Todos */}
      <div>
        <h2 className='text-xl'>
          Tasks <Dot className='inline size-10 text-lime-500' /> 3h
        </h2>
        <div>
          <TodosListing todos={unCompletedTodos} />
          <TodosListing todos={unCompletedTodos} />
        </div>
      </div>

      {/* Toggle Completed Todos and liste them */}
      <ToggleTodos todos={completedTodos} />
    </div>
  )
}
export default TodosPage
