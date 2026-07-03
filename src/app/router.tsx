import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Students from "../pages/students/Students";
import StudentProfile from "@/pages/students/StudentProfile";
// import StudentDetails from "../pages/students/StudentDetails";
import VirtualAccounts from "../pages/virtual-accounts/VirtualAccounts";
// import Invoices from "../pages/invoices/Invoices";
import Payments from "../pages/payments/Payments";
import AddStudent from "@/pages/students/AddStudent";
// import Reconciliation from "../pages/reconciliation/Reconciliation";
// import Reports from "../pages/reports/Reports";
// import Settings from "../pages/settings/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "students",
        element: <Students />,
      },

      {
        path: "students/:id",
        element: <StudentProfile />,
      },

      {
        path: "students/new",
        element: <AddStudent />,
      },

      //   {
      //     path: "students/:id",
      //     element: <StudentDetails />,
      //   },
      {
        path: "virtual-accounts",
        element: <VirtualAccounts />,
      },
      //   {
      //     path: "invoices",
      //     element: <Invoices />,
      //   },
      {
        path: "payments",
        element: <Payments />,
      },
      //   {
      //     path: "reconciliation",
      //     element: <Reconciliation />,
      //   },
      //   {
      //     path: "reports",
      //     element: <Reports />,
      //   },
      //   {
      //     path: "settings",
      //     element: <Settings />,
      //   },
    ],
  },
]);

export default router;
