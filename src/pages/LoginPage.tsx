import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { apiPost, type LoginData } from "../lib/api";
import { setAuthSession } from "../lib/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const search = useRouterState({ select: (state) => state.location.search });
  const queryClient = useQueryClient();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");

  const activeTab = typeof search?.tab === "string" && search.tab === "register" ? "register" : "login";
  const redirectTo =
    typeof search?.redirect === "string" && search.redirect.startsWith("/") ? search.redirect : null;

  const loginMutation = useMutation({
    mutationFn: (payload: { email: string; password: string }) => apiPost<LoginData>("/api/auth/login", payload),
    onSuccess: (data) => {
      if (data?.token) {
        setAuthSession(data.token, data.user);
      }
      if (data?.user) {
        queryClient.setQueryData(["auth-me"], data.user);
      }
      queryClient.invalidateQueries({ queryKey: ["auth-me"] });
      toast.success(`Welcome back${data?.user?.name ? `, ${data.user.name}` : ""}!`);
      navigate({ to: redirectTo ?? "/dashboard" });
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Login failed. Please try again.");
    },
  });

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
      navigate({ to: redirectTo ?? "/dashboard" });
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : "Registration failed. Please try again.");
    },
  });

  const handleLogin = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      toast.error("Please enter your email and password.");
      return;
    }
    loginMutation.mutate({
      email: loginEmail.trim(),
      password: loginPassword,
    });
  };

  const handleRegister = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const name = registerName.trim();
    const email = registerEmail.trim();
    const password = registerPassword;
    const confirm = registerConfirm;

    if (!name || !email || !password || !confirm) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match.");
      return;
    }

    registerMutation.mutate({
      name,
      email,
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
          <Card className="w-full max-w-[480px] border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
            <div className="pt-8 px-8 pb-4 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                Welcome to EduBlog
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Join our community of learners and share your knowledge.
              </p>
            </div>
            <Tabs
              className="px-8 pb-8"
              onValueChange={(value) => {
                const nextSearch: Record<string, string> = { tab: value };
                if (redirectTo) {
                  nextSearch.redirect = redirectTo;
                }
                navigate({ to: "/auth", search: nextSearch });
              }}
              value={activeTab}>
              <TabsList className="w-full">
                <TabsTrigger className="flex-1" value="login">
                  Login
                </TabsTrigger>
                <TabsTrigger className="flex-1" value="register">
                  Register
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form className="space-y-5" onSubmit={handleLogin}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="login-email">
                      Email or Username
                    </label>
                    <Input
                      autoComplete="username"
                      id="login-email"
                      onChange={(event) => setLoginEmail(event.target.value)}
                      placeholder="you@example.com"
                      type="text"
                      value={loginEmail}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="login-password">
                        Password
                      </label>
                      <Link className="text-xs font-medium text-primary hover:underline" to="/reset-password">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      autoComplete="current-password"
                      id="login-password"
                      onChange={(event) => setLoginPassword(event.target.value)}
                      placeholder="********"
                      type="password"
                      value={loginPassword}
                    />
                  </div>
                  <Button className="w-full" disabled={loginMutation.isPending} type="submit">
                    {loginMutation.isPending ? "Signing in..." : "Log In"}
                  </Button>
                  <div className="text-center text-xs text-gray-500">Or continue with</div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button onClick={() => toast.message("Google sign-in coming soon.")} variant="outline">
                      Google
                    </Button>
                    <Button onClick={() => toast.message("GitHub sign-in coming soon.")} variant="outline">
                      GitHub
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form className="space-y-4" onSubmit={handleRegister}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-username">
                      Username
                    </label>
                    <Input
                      autoComplete="name"
                      id="reg-username"
                      onChange={(event) => setRegisterName(event.target.value)}
                      placeholder="Student123"
                      type="text"
                      value={registerName}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-email">
                      Email Address
                    </label>
                    <Input
                      autoComplete="email"
                      id="reg-email"
                      onChange={(event) => setRegisterEmail(event.target.value)}
                      placeholder="you@example.com"
                      type="email"
                      value={registerEmail}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-password">
                      Password
                    </label>
                    <Input
                      autoComplete="new-password"
                      id="reg-password"
                      onChange={(event) => setRegisterPassword(event.target.value)}
                      placeholder="Min 8 chars"
                      type="password"
                      value={registerPassword}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-confirm-password">
                      Confirm Password
                    </label>
                    <Input
                      autoComplete="new-password"
                      id="reg-confirm-password"
                      onChange={(event) => setRegisterConfirm(event.target.value)}
                      placeholder="********"
                      type="password"
                      value={registerConfirm}
                    />
                  </div>
                  <Button className="w-full" disabled={registerMutation.isPending} type="submit">
                    {registerMutation.isPending ? "Creating..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            <div className="bg-gray-50 dark:bg-[#101622] px-8 py-4 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                By continuing, you agree to EduBlog's
                <Link className="underline hover:text-gray-600 dark:hover:text-gray-300 px-1" to="/about">
                  Terms of Service
                </Link>
                and
                <Link className="underline hover:text-gray-600 dark:hover:text-gray-300 pl-1" to="/about">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </Card>
        </main>
        <PublicFooter />
      </PageTransition>
    </div>
  );
};

export default LoginPage;
