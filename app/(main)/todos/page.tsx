import { createTodo, getTodos } from '@/actions/todos'
import TodosListing from '@/components/TodosListing'
import { Card, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  ArrowDownUp,
  ChevronDown,
  ChevronUp,
  Dot,
  Plus,
  Timer
} from 'lucide-react'

const TodosPage = async () => {
  const todos = await getTodos()
  const showCompleted = false

  return (
    <div className='space-y-4 px-5'>
      <div className='flex justify-between'>
        <h1 className='text-2xl'>Today</h1>
        <ArrowDownUp />
      </div>

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

      <div className=''>
        <h2 className='text-xl'>
          Tasks <Dot className='inline size-10 text-lime-500' /> 3h
        </h2>
        <Card className='flex items-center justify-between px-5 py-2'>
          <div className='flex items-center gap-2'>
            <Input type='radio' className='size-4' />
            <Timer className='size-5' />
            <div>
              <p>coding (auth.js + Linkify - todos part )</p>
              <div className='flex gap-1'>
                <Timer className='size-4 text-lime-300' />
                <Timer className='size-4 text-lime-300' />
                <Timer className='size-4 text-lime-300' />
              </div>
            </div>
          </div>
          <p className='text-zinc-300'>Today</p>
        </Card>
      </div>

      <div className='mx-auto mt-20 flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-1'>
        <p className='text-sm'>
          {showCompleted ? 'Show' : 'Hide'} Completed Tasks
        </p>
        {!showCompleted ? <ChevronDown /> : <ChevronUp />}
      </div>

      <TodosListing todos={todos}/>
    </div>
  )
}
export default TodosPage
