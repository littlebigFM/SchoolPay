import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import PageHeader from "@/components/ui/PageHeader";
import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";
import Button from "@/components/ui/Button";

import StudentFilters from "@/components/students/StudentFilters";
import StudentStats from "@/components/students/StudentStats";
import StudentTable from "@/components/students/StudentTable";

import DeleteModal from "@/components/dialogs/DeleteModal";

import { students as mockStudents } from "@/mock/students";

const ITEMS_PER_PAGE = 5;

const Students = () => {
  const [students, setStudents] = useState(mockStudents);

  const [studentToDelete, setStudentToDelete] = useState<
    (typeof mockStudents)[number] | null
  >(null);

  const [deleting, setDeleting] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.fullName.toLowerCase().includes(search.toLowerCase()) ||
        student.admissionNumber.toLowerCase().includes(search.toLowerCase());

      const matchesClass = !selectedClass || student.class === selectedClass;

      const matchesStatus =
        !selectedStatus || student.paymentStatus === selectedStatus;

      return matchesSearch && matchesClass && matchesStatus;
    });
  }, [students, search, selectedClass, selectedStatus]);

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);

  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredStudents.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredStudents, currentPage]);

  const handleDeleteStudent = async () => {
    if (!studentToDelete) return;

    setDeleting(true);

    setTimeout(() => {
      setStudents((prev) =>
        prev.filter((student) => student.id !== studentToDelete.id),
      );

      setDeleting(false);

      setStudentToDelete(null);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <PageHeader
        title="Students"
        description="Manage student records, payments and virtual accounts."
        action={
          <Button onClick={() => navigate("/students/new")} className="gap-2">
            <Plus size={18} />
            Add Student
          </Button>
        }
      />

      <StudentStats students={students} />

      <StudentFilters
        search={search}
        selectedClass={selectedClass}
        selectedStatus={selectedStatus}
        onSearchChange={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
        onClassChange={(value) => {
          setSelectedClass(value);
          setCurrentPage(1);
        }}
        onStatusChange={(value) => {
          setSelectedStatus(value);
          setCurrentPage(1);
        }}
      />

      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-900">
          {filteredStudents.length}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-900">{students.length}</span>{" "}
        students
      </p>

      {filteredStudents.length ? (
        <>
          <StudentTable
            students={paginatedStudents}
            onDelete={setStudentToDelete}
          />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      ) : (
        <EmptyState
          title="No students found"
          description="Try changing your search or filters."
        />
      )}

      <DeleteModal
        open={!!studentToDelete}
        onOpenChange={(open) => {
          if (!open) setStudentToDelete(null);
        }}
        title="Delete Student"
        itemName={studentToDelete?.fullName ?? ""}
        itemType="student"
        onConfirm={handleDeleteStudent}
        loading={deleting}
      />
    </motion.div>
  );
};

export default Students;
