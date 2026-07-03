import { z } from "zod";

export const studentSchema = z.object({
  class_id: z.string().min(1, "Class is required"),

  first_name: z.string().min(2, "First name is required"),

  middle_name: z.string().optional(),

  last_name: z.string().min(2, "Last name is required"),

  gender: z.string().min(1, "Gender is required"),

  date_of_birth: z.string().min(1, "Date of birth is required"),

  email: z.string().email("Invalid email").optional().or(z.literal("")),

  phone: z.string().min(10),

  parent_name: z.string().min(2),

  parent_email: z.string().email("Invalid email").optional().or(z.literal("")),

  parent_phone: z.string().min(10),

  parent_address: z.string().min(5),

  photo: z.any().optional(),
});

export type StudentFormValues = z.infer<typeof studentSchema>;
