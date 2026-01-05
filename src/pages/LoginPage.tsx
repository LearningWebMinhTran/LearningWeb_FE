import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

import UserNavbar from "../components/organisms/UserNavbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    toast.success("Welcome back!");
    navigate({ to: "/dashboard" });
  };

  const handleRegister = () => {
    toast.success("Account created successfully.");
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#0d121b] dark:text-[#f8f9fc] flex flex-col min-h-screen">
      <UserNavbar />
      <main className="flex-grow flex items-center justify-center p-4 py-12 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
        <Card className="w-full max-w-[480px] border border-gray-100 dark:border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
          <div className="pt-8 px-8 pb-4 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">Welcome to EduBlog</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Join our community of learners and share your knowledge.
            </p>
          </div>
          <Tabs defaultValue="login" className="px-8 pb-8">
            <TabsList className="w-full">
              <TabsTrigger className="flex-1" value="login">
                Login
              </TabsTrigger>
              <TabsTrigger className="flex-1" value="register">
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="login-email">
                    Email or Username
                  </label>
                  <Input id="login-email" placeholder="you@example.com" type="email" />
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
                  <Input id="login-password" placeholder="********" type="password" />
                </div>
                <Button className="w-full" onClick={handleLogin}>
                  Log In
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
              </div>
            </TabsContent>
            <TabsContent value="register">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-username">
                    Username
                  </label>
                  <Input id="reg-username" placeholder="Student123" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-email">
                    Email Address
                  </label>
                  <Input id="reg-email" placeholder="you@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-password">
                    Password
                  </label>
                  <Input id="reg-password" placeholder="Min 8 chars" type="password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white" htmlFor="reg-confirm-password">
                    Confirm Password
                  </label>
                  <Input id="reg-confirm-password" placeholder="********" type="password" />
                </div>
                <Button className="w-full" onClick={handleRegister}>
                  Create Account
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          <div className="bg-gray-50 dark:bg-[#101622] px-8 py-4 border-t border-gray-100 dark:border-gray-800 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              By continuing, you agree to EduBlog's
              <Link className="underline hover:text-gray-600 dark:hover:text-gray-300" to="/about">
                Terms of Service
              </Link>
              and
              <Link className="underline hover:text-gray-600 dark:hover:text-gray-300" to="/about">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default LoginPage;

