"use server";

import db from "@/lib/prisma/db";
import { noteSchema } from "@/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export const CreateNoteAction = async (
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

  return redirect("/notes")

};

export const getNotes = async () => {
  const notes = await db.note.findMany({
    orderBy: { createdAt: "desc" },
  });
  return notes;
};
