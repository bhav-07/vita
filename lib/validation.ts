import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(3, "Username must be atleat 3 characters.")
    .max(30, "Username can be atmost 30 characters."),
  email: z.string().email("Invalid Email Address."),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});
