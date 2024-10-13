import { z } from "zod";

export const settingSchema = z.object({
  name: z.string().min(2).max(50),
  // email: z.string().email().optional(),
  // password: z.string().min(8).optional(),
  // colorScheme: z.string().optional(),
});

export const noteSchema = z.object({
  title: z.string().min(6).max(100),
  content: z.string().min(8).max(1000),
  userId: z.string().optional(),
});
