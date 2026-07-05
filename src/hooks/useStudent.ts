import { useEffect, useState } from "react";

import { studentService } from "@/services/student.service";

import type { Student } from "@/types/student";

export const useStudent = (id?: string) => {
  const [student, setStudent] = useState<Student | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);

      setError("Student ID not found.");

      return;
    }

    const fetchStudent = async () => {
      try {
        setLoading(true);

        const data = await studentService.getStudentById(id);

        if (!data) {
          setError("Student not found.");

          return;
        }

        setStudent(data);
      } catch {
        setError("Unable to load student.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  return {
    student,
    loading,
    error,
  };
};
