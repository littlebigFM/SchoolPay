import { useMemo } from "react";
import { useParams } from "react-router-dom";

import StudentForm from "@/components/students/add-student/StudentForm";
import PageHeader from "@/components/ui/PageHeader";

import { students } from "@/mock/students";

const AddStudent = () => {
  const { id } = useParams();

  const student = useMemo(() => {
    return students.find((student) => student.id === id);
  }, [id]);

  const isEdit = Boolean(student);

  return (
    <div className="space-y-6">
      <PageHeader
        title={isEdit ? "Edit Student" : "Add Student"}
        description={
          isEdit
            ? "Update student information."
            : "Register a new student and automatically generate a virtual account."
        }
      />

      <StudentForm student={student} />
    </div>
  );
};

export default AddStudent;
