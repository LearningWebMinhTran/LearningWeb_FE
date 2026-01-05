import { toast } from "sonner";

import UserNavbar from "../components/organisms/UserNavbar";
import PublicFooter from "../components/organisms/PublicFooter";
import PageTransition from "../components/layouts/PageTransition";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Link } from "@tanstack/react-router";

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased">
      <UserNavbar />
      <PageTransition className="flex flex-col min-h-screen">
        <div className="mx-auto max-w-[480px] px-4 py-16 flex-1">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-[#4c669a] dark:text-gray-400">
                Enter your email and we will send you a reset link.
              </p>
              <Input placeholder="you@example.com" type="email" />
              <div className="flex items-center gap-3">
                <Button onClick={() => toast.success("Reset link sent.")}>Send Reset Link</Button>
                <Button asChild variant="outline">
                  <Link search={{ tab: "login" }} to="/auth">
                    Back to Login
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <PublicFooter />
      </PageTransition>
    </div>
  );
};

export default ResetPasswordPage;
