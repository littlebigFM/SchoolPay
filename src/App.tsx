import { RouterProvider } from "react-router-dom";

import { router } from "./app/router";

import QueryProvider from "./providers/QueryProvider";
import { AuthProvider } from "./context/AuthContext";

import { Toaster } from "sonner";

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />

        <Toaster richColors position="top-right" closeButton />
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;
