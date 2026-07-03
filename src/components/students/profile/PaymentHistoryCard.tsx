// import { motion } from "framer-motion";

// import Card from "@/components/ui/Card";

// import { paymentHistory } from "@/mock/paymentHistory";

// const MotionCard = motion(Card);

// const PaymentHistoryCard = () => {
//   return (
//     <MotionCard
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         delay: 0.25,
//         duration: 0.35,
//       }}
//       className="h-full p-6"
//     >
//       <div className="mb-6 flex items-center justify-between">
//         <h2 className="text-lg font-semibold">Payment History</h2>

//         <span className="text-sm text-slate-500">
//           {paymentHistory.length} Payments
//         </span>
//       </div>

//       <div className="space-y-4">
//         {paymentHistory.map((payment, index) => (
//           <motion.div
//             key={payment.id}
//             initial={{
//               opacity: 0,
//               x: -20,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               delay: 0.35 + index * 0.08,
//               duration: 0.3,
//             }}
//             whileHover={{
//               x: 6,
//               transition: {
//                 duration: 0.2,
//               },
//             }}
//             className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition-colors hover:border-violet-200 hover:bg-violet-50/40"
//           >
//             <div>
//               <p className="font-medium">₦{payment.amount.toLocaleString()}</p>

//               <p className="text-sm text-slate-500">{payment.method}</p>
//             </div>

//             <div className="text-right">
//               <p className="text-sm font-medium">{payment.date}</p>

//               <span className="mt-1 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
//                 {payment.status}
//               </span>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </MotionCard>
//   );
// };

// export default PaymentHistoryCard;

import Card from "@/components/ui/Card";
import { paymentHistory } from "@/mock/paymentHistory";
import { motion } from "framer-motion";

const PaymentHistoryCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.25,
        duration: 0.3,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="h-full p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Payment History</h2>

          <span className="text-sm text-slate-500">
            {paymentHistory.length} Payments
          </span>
        </div>

        <div className="space-y-4">
          {paymentHistory.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between rounded-xl  p-4"
            >
              <div>
                <p className="font-medium">
                  ₦{payment.amount.toLocaleString()}
                </p>
                <p className="text-sm text-slate-500">{payment.method}</p>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium">{payment.date}</p>
                <span className="mt-1 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default PaymentHistoryCard;
