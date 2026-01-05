import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";
import MaterialIcon from "../components/atoms/MaterialIcon";
import { apiPost, type LoginData } from "../lib/api";
import { setAuthSession } from "../lib/auth";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const registerMutation = useMutation({
    mutationFn: (payload: { name: string; email: string; password: string }) =>
      apiPost<LoginData>("/api/auth/register", payload),
    onSuccess: (data) => {
      if (data?.token) {
        setAuthSession(data.token, data.user);
      }
      if (data?.user) {
        queryClient.setQueryData(["auth-me"], data.user);
      }
      queryClient.invalidateQueries({ queryKey: ["auth-me"] });
      toast.success(`Welcome${data?.user?.name ? `, ${data.user.name}` : ""}!`);
      navigate({ to: "/dashboard" });
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Registration failed. Please try again.");
    },
  });

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password || !confirmPassword) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    registerMutation.mutate({
      name: trimmedName,
      email: trimmedEmail,
      password,
    });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white flex flex-col min-h-screen antialiased">
      <UserNavbar />

      <PageTransition className="flex-grow flex flex-col">
        <main className="flex-grow flex items-center justify-center p-4 py-12 relative overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="w-full max-w-[480px] bg-white dark:bg-[#1a2230] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col">
            <div className="pt-8 px-8 pb-2 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                Create an Account
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Join our community to access exclusive learning content.
              </p>
            </div>
            <form className="p-8 pt-6 space-y-5" onSubmit={handleRegister}>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-username">
                  Username
                </label>
                <div className="relative">
                  <MaterialIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]" name="person" />
                  <input
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101622] pl-10 py-2.5 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder-gray-400"
                    id="reg-username"
                    name="username"
                    placeholder="Choose a username"
                    required
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-email">
                  Email Address
                </label>
                <div className="relative">
                  <MaterialIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]" name="mail" />
                  <input
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101622] pl-10 py-2.5 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder-gray-400"
                    id="reg-email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-password">
                  Password
                </label>
                <div className="relative">
                  <MaterialIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]" name="lock" />
                  <input
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101622] pl-10 pr-10 py-2.5 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder-gray-400"
                    id="reg-password"
                    name="password"
                    placeholder="Create a password"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                    onClick={() => setShowPassword((prev) => !prev)}
                    type="button">
                    <MaterialIcon name={showPassword ? "visibility" : "visibility_off"} />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <MaterialIcon className="text-[14px]" name="info" />
                  Must be at least 8 characters long
                </p>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-confirm-password">
                  Confirm Password
                </label>
                <div className="relative">
                  <MaterialIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]"
                    name="verified_user"
                  />
                  <input
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101622] pl-10 pr-10 py-2.5 text-sm focus:border-primary focus:ring-primary dark:text-white placeholder-gray-400"
                    id="reg-confirm-password"
                    name="confirm-password"
                    placeholder="Repeat your password"
                    required
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                    onClick={() => setShowConfirm((prev) => !prev)}
                    type="button">
                    <MaterialIcon name={showConfirm ? "visibility" : "visibility_off"} />
                  </button>
                </div>
              </div>
              <button
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-6 shadow-md shadow-primary/20"
                disabled={registerMutation.isPending}
                type="submit">
                <span>Create Account</span>
                <MaterialIcon className="text-[20px]" name="person_add" />
              </button>
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?
                  <Link className="text-primary font-bold hover:underline ml-1" search={{ tab: "login" }} to="/auth">
                    Log in here
                  </Link>
                </p>
              </div>
            </form>
            <div className="bg-gray-50 dark:bg-[#101622] px-8 py-4 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                By creating an account, you agree to EduBlog's{" "}
                <Link className="underline hover:text-gray-600 dark:hover:text-gray-300" to="/about">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link className="underline hover:text-gray-600 dark:hover:text-gray-300" to="/about">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </main>
        <PublicFooter />
      </PageTransition>
    </div>
  );
};

export default RegisterPage;

