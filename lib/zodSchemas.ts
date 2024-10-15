import { z } from "zod";

export const settingSchema = z.object({
  name: z.string().min(2).max(50),
  // email: z.string().email().optional(),
  // password: z.string().min(8).optional(),
  // colorScheme: z.string().optional(),
});

//userId is iptional just for testing purposes 

export const noteSchema = z.object({
  title: z.string().min(6).max(100),
  content: z.string().min(8).max(1000),
  userId: z.string().optional(),
});

export const todoSchema = z.object({
  todo: z.string().min(1).max(50),
  time: z.number().optional(),
  userId: z.string().optional(),
});
