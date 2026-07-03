import { studentSchema } from "@/schemas/studentSchema";
import type { z } from "zod";

export type StudentFormData = z.infer<typeof studentSchema>;
