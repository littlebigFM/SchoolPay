import { students } from "@/mock/students";

export const studentService = {
  getStudentById: async (id: string) => {
    // simulate backend request
    await new Promise((resolve) => setTimeout(resolve, 300));

    return students.find((student) => student.id === id) ?? null;
  },
};
