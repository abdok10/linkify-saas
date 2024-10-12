import { z } from "zod";

export const settingSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  // email: z.string().email().optional(),
  // password: z.string().min(8).optional(),
  // colorScheme: z.string().optional(),
});
