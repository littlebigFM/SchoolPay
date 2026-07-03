import {
  LayoutDashboard,
  Users,
  Wallet,
  Receipt,
  CreditCard,
  Scale,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    section: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
      },
      {
        label: "Students",
        path: "/students",
        icon: Users,
      },
    ],
  },
  {
    section: "PAYMENT OPERATIONS",
    items: [
      {
        label: "Virtual Accounts",
        path: "/virtual-accounts",
        icon: Wallet,
      },
      {
        label: "Invoices",
        path: "/invoices",
        icon: Receipt,
      },
      {
        label: "Payments",
        path: "/payments",
        icon: CreditCard,
      },
      {
        label: "Reconciliation",
        path: "/reconciliation",
        icon: Scale,
      },
    ],
  },
  {
    section: "INSIGHTS",
    items: [
      {
        label: "Reports",
        path: "/reports",
        icon: BarChart3,
      },
    ],
  },
  {
    section: "SYSTEM",
    items: [
      {
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
];
