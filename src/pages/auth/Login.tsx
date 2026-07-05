import { useNavigate, Navigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import AuthLogo from "@/components/auth/AuthLogo";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import RememberMe from "@/components/auth/RememberMe";
import Button from "@/components/ui/Button";

import { loginSchema } from "@/schemas/loginSchema";
import type { LoginFormData } from "@/schemas/loginSchema";

import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = methods;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data);

      toast.success("Welcome back!");

      navigate("/");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* LEFT */}

      <div className="hidden flex-col justify-between bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-700 p-14 text-white lg:flex">
        <div />

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            School Payment
            <br />
            made effortless.
          </h1>

          <p className="mt-6 max-w-md text-lg text-violet-100">
            Manage students, invoices, payments and reconciliation from one
            modern dashboard.
          </p>
        </div>

        <p className="text-violet-200">SchoolPay Enterprise</p>
      </div>

      {/* RIGHT */}

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <AuthLogo />

          <div className="mt-10">
            <h2 className="text-3xl font-bold">Welcome Back</h2>

            <p className="mt-2 text-slate-500">Sign in to continue.</p>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
              <AuthInput
                label="Email"
                type="email"
                registration={register("email")}
                error={errors.email}
              />

              <PasswordInput
                label="Password"
                registration={register("password")}
                error={errors.password}
              />

              <div className="flex items-center justify-between">
                <RememberMe
                  checked={watch("rememberMe")}
                  onChange={(checked) => setValue("rememberMe", checked)}
                />

                <button
                  type="button"
                  className="text-sm text-violet-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <Button type="submit" fullWidth loading={isSubmitting}>
                Sign In
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
