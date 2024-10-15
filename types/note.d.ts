export interface NoteTypes {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export interface TodoTypes {
  id: number
  todo: string
  isCompleted: boolean
  createdAt: Date
  updatedAt: Date
  userId?: string
}
