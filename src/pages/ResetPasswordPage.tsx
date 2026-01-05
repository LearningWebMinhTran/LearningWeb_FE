import { toast } from "sonner";

import UserNavbar from "../components/organisms/UserNavbar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Link } from "@tanstack/react-router";

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white">
      <UserNavbar />
      <div className="mx-auto max-w-[480px] px-4 py-16">
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
                <Link to="/login">Back to Login</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
