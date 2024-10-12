"use server";

import db from "@/lib/prisma/db";
import { settingSchema } from "@/lib/zodSchemas";
import { parseWithZod } from "@conform-to/zod";

export const SettingActions = async (
  prevState: unknown,
  formData: FormData
) => {
  //NOTE - should  get from auth user
  const user = await getUser();
  console.log("user=========", user);
  const submission = parseWithZod(formData, {
    schema: settingSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { name } = submission.value;

  if (name && user) {
    await db.user.update({
      where: { email: user.email },
      data: {
        name,
      },
    });
  }
};

export const getUser = async () => {
  const user = await db.user.findFirst();
  return user;
};
