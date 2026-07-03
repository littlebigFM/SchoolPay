import Card from "@/components/ui/Card";
import type { Student } from "@/types/student";
import { motion } from "framer-motion";

interface ParentInfoCardProps {
  student: Student;
}

const ParentInfoCard = ({ student }: ParentInfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.3,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="h-full p-6">
        <h2 className="mb-6 text-lg font-semibold">Parent Information</h2>

        <div className="space-y-5">
          <Info label="Parent Name" value={student.parentName} />
          <Info label="Phone Number" value={student.parentPhone} />
        </div>
      </Card>
    </motion.div>
  );
};

interface InfoProps {
  label: string;
  value: string;
}

const Info = ({ label, value }: InfoProps) => (
  <div>
    <p className="text-sm text-slate-500">{label}</p>
    <p className="mt-1 font-medium">{value}</p>
  </div>
);

export default ParentInfoCard;
