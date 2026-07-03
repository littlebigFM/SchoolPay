import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";

import StudentProfileHeader from "@/components/students/profile/StudentProfileHeader";
import StudentInfoCard from "@/components/students/profile/StudentInfoCard";
import ParentInfoCard from "@/components/students/profile/ParentInfoCard";
import FeeSummaryCard from "@/components/students/profile/FeeSummaryCard";

import { students } from "@/mock/students";
import PaymentHistoryCard from "@/components/students/profile/PaymentHistoryCard";
import PaymentTimeline from "@/components/students/profile/PaymentTimeline";

const StudentProfile = () => {
  const { id } = useParams();

  const student = useMemo(
    () => students.find((student) => student.id === id),
    [id],
  );

  if (!student) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="space-y-6"
      >
        <PageHeader
          title="Student not found"
          description="The requested student does not exist."
        />

        <Link to="/students">
          <Button>Back to Students</Button>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <Link
        to="/students"
        className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700"
      >
        <ArrowLeft size={18} />
        Back to Students
      </Link>

      <StudentProfileHeader student={student} />

      <div className="grid gap-6 lg:grid-cols-2">
        <StudentInfoCard student={student} />

        <FeeSummaryCard student={student} />

        <ParentInfoCard student={student} />

        <PaymentHistoryCard />
      </div>

      <PaymentTimeline />
    </motion.div>
  );
};

export default StudentProfile;
