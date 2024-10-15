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
  try {
  } catch (error) {
    console.error('Error fetching todos')
  }
}

export const createTodo = async (formData: FormData) => {
  const todoField = formData.get('todo') as string
  const timeField = formData.get('time') as string

  console.log(todoField, timeField)

  try {
    const todo = await db.todo.create({
      data: {
        todo: todoField,
        time: +timeField
      }
    })

    revalidatePath('/notes')
    return todo
  } catch (error) {
    return error
  }
}
