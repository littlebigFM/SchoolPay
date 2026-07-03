import StudentForm from "@/components/students/add-student/StudentForm";
import PageHeader from "@/components/ui/PageHeader";

const AddStudent = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Add Student"
        description="Register a new student. A virtual account will be generated automatically."
      />

      <StudentForm />
    </div>
  );
};

export default AddStudent;
