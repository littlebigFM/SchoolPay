import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";

import Dashboard from "@/pages/dashboard/Dashboard";

import Students from "@/pages/students/Students";
import StudentProfile from "@/pages/students/StudentProfile";
import AddStudent from "@/pages/students/AddStudent";

import VirtualAccounts from "@/pages/virtual-accounts/VirtualAccounts";

import Invoices from "@/pages/invoices/Invoices";

import Payments from "@/pages/payments/Payments";

import Login from "@/pages/auth/Login";

import ProtectedRoute from "@/routes/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),

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
        path: "students/new",
        element: <AddStudent />,
      },

      {
        path: "students/:id",
        element: <StudentProfile />,
      },

      {
        path: "virtual-accounts",
        element: <VirtualAccounts />,
      },

      {
        path: "invoices",
        element: <Invoices />,
      },

      {
        path: "payments",
        element: <Payments />,
      },

      // {
      //   path: "reconciliation",
      //   element: <Reconciliation />,
      // },

      // {
      //   path: "reports",
      //   element: <Reports />,
      // },

      // {
      //   path: "settings",
      //   element: <Settings />,
      // },
    ],
  },
]);

export default router;
