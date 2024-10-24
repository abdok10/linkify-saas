'use server'

import db from '@/lib/prisma/db'
import { revalidatePath } from 'next/cache'

export const getTodos = async () => {
  const todos = await db.todo.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
  return todos
}

export const createTodo = async (formData: FormData) => {
  const todoField = formData.get('todo') as string | null
  const timeField = formData.get('time') as string | null

  console.log(todoField, timeField)

  if (!todoField || !timeField) {
    throw new Error('Todo or time field is missing.')
  }

  try {
    const todo = await db.todo.create({
      data: {
        todo: todoField,
        time: +timeField
      }
    })

    revalidatePath('/todos')
    return todo
  } catch (error) {
    throw new Error('Todo or time field is missing.')
  }
}
