import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import PageHeader from "@/components/ui/PageHeader";
import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";

import StudentFilters from "@/components/students/StudentFilters";
import StudentStats from "@/components/students/StudentStats";
import StudentTable from "@/components/students/StudentTable";

import { students } from "@/mock/students";

const ITEMS_PER_PAGE = 5;

const Students = () => {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
  }, [search, selectedClass, selectedStatus]);

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);

  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredStudents.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredStudents, currentPage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <PageHeader
        title="Students"
        description="Manage students and monitor fee payments."
      />

      <StudentStats />

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

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {filteredStudents.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-900">
            {students.length}
          </span>{" "}
          students
        </p>
      </div>

      {filteredStudents.length ? (
        <>
          <StudentTable students={paginatedStudents} />

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
    </motion.div>
  );
};

export default Students;
