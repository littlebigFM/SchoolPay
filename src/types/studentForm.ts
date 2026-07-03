import type { z } from "zod";
import type { studentSchema } from "@/schemas/studentSchema";

export type StudentFormData = z.infer<typeof studentSchema>;
