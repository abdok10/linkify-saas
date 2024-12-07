"use server";

import db from "@/lib/prisma/db";
import { noteSchema } from "@/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export const createNoteAction = async (
  prevState: unknown,
  formData: FormData
) => {
  // const user;
  // if (!user) throw new Error("Not Authorized");

  const submission = parseWithZod(formData, {
    schema: noteSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { title, content } = submission.value;

  await db.note.create({
    data: {
      // from auth user
      // userId: user?.id,
      title,
      content,
    },
  });

  return redirect("/notes");
};

export const updateNoteAction = async (
  prevState: unknown,
  formData: FormData
) => {
  // const user;
  // if (!user) throw new Error("Not Authorized");

  const noteId = formData.get("noteId") as string;

  const submission = parseWithZod(formData, {
    schema: noteSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { title, content } = submission.value;

  try {
    await db.note.update({
      where: { id: noteId },
      data: {
        // from auth user
        userId: "randomid",
        title,
        content,
      },
    });
  } catch (e) {
    throw new Error("Error updating note");
  }

  return redirect("/notes");
};

export const deleteNote = async (noteId: string) => {
  await db.note.delete({
    where: { id: noteId },
  });
  return redirect("/notes");
};

export const getNote = async (noteId: string) => {
  const note = await db.note.findUnique({
    where: { id: noteId },
  });
  return note;
};

export const getAllNotes = async () => {
  const notes = await db.note.findMany({
    // where: { userId: "randomid" },
    orderBy: { createdAt: "desc" },
  });
  console.log({ notes })
  return notes;
};
