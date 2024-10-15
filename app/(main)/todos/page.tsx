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

  const estimatedTime = unCompletedTodos
    .map(todo => todo.time)
    .reduce((curr, acc) => curr + acc, 0)
  const elapsedTime = completedTodos
    .map(todo => todo.time)
    .reduce((curr, acc) => curr + acc, 0)
  const unCompletedTodosLength = unCompletedTodos.length
  const completedTodosLength = completedTodos.length

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
            <span className='text-3xl font-semibold text-lime-500'>
              {estimatedTime}
            </span>
            h
          </h2>
          <CardDescription>Estimated Time</CardDescription>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-semibold text-lime-500'>
            {unCompletedTodosLength}
          </h2>
          <CardDescription>Tasks to be Completed</CardDescription>
        </div>
        <div className='flex flex-col items-center'>
          <h2>
            <span className='text-3xl font-semibold text-lime-500'>
              {elapsedTime}
            </span>
            h
          </h2>
          <CardDescription>Elapsed Time</CardDescription>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-semibold text-lime-500'>
            {completedTodosLength}
          </h2>
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
          Tasks <Dot className='inline size-10 text-lime-500' /> {estimatedTime}
          h
        </h2>
        <div>
          <TodosListing todos={unCompletedTodos} />
        </div>
      </div>

      {/* Toggle Completed Todos and liste them */}
      <ToggleTodos todos={completedTodos} elapsedTime={elapsedTime} />
    </div>
  )
}
export default TodosPage
