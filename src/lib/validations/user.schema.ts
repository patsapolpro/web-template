import { z } from "zod";

export const LoginUserSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(1, "Username is required"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required")
});

export type LoginUserInput = z.infer<typeof LoginUserSchema>;
