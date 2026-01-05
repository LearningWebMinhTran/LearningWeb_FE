import { useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

import AccountSectionCard from "../components/organisms/AccountSectionCard";
import UserLayout from "../components/layouts/UserLayout";
import PageTransition from "../components/layouts/PageTransition";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { useAuthActions, useAuthMe } from "../lib/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

const AccountPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: user } = useAuthMe();
  const { logout } = useAuthActions();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully.");
    navigate({ to: "/auth", search: { tab: "login" } });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <UserLayout activeNav="settings">
      <PageTransition>
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Account Settings</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl">
                Manage your profile details, update your password, and control your security preferences here.
              </p>
            </div>
            <Button className="self-start" onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="w-full lg:w-64 flex-shrink-0">
              <nav className="flex flex-col gap-1 sticky top-6">
                <a className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium text-sm transition-colors" href="#profile">
                  Profile Information
                </a>
                <a className="flex items-center gap-3 px-4 py-3 text-[#4c669a] dark:text-gray-400 hover:bg-[#e7ebf3] dark:hover:bg-[#2d3748] hover:text-[#0d121b] dark:hover:text-white rounded-lg font-medium text-sm transition-colors" href="#security">
                  Password Security
                </a>
                <a className="flex items-center gap-3 px-4 py-3 text-[#4c669a] dark:text-gray-400 hover:bg-[#ffebee] hover:text-red-600 rounded-lg font-medium text-sm transition-colors" href="#danger-zone">
                  Account Management
                </a>
              </nav>
            </aside>
            <main className="flex-1 flex flex-col gap-8 pb-20">
              <AccountSectionCard
                className="shadow-sm"
                headerClassName="border-b border-[#e7ebf3] dark:border-[#2d3748]"
                id="profile"
                title="Profile Information">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="relative group">
                    <Avatar className="h-24 w-24 ring-4 ring-[#f8f9fc] dark:ring-[#101622]">
                      <AvatarImage
                        alt="Current profile picture showing a person smiling"
                        src={
                          typeof user?.avatar === "string"
                            ? user.avatar
                            : "https://lh3.googleusercontent.com/aida-public/AB6AXuDBuHSDyQ9Z9RhSu_4zIqhN1jP0Y_csDDSli5PNJDmFH3yExp5JMgueOPnmXEhI4V7eldSx8Gy3xW-w65PxMbfhzZFl4-YABtGOjlKi6-XiVGR8slbXFypSnN7lpZ9wIcvVZXEbxlIoU8uNyDhKejGZH1muzChJ3CmTq2y9f2RDYifSvDVuFh5wRq6qE5OE-Ty85v-oUtY0bPfxVYmVqu4zrFwKOYweMPpxnNJ2H9MfM7G-Ubwp3i1l5Yt_Ov1jUgguiqff17sAyVkn"
                        }
                      />
                      <AvatarFallback>{user?.name?.slice(0, 2) ?? "AJ"}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col justify-center text-center sm:text-left">
                    <h3 className="text-[#0d121b] dark:text-white font-semibold text-lg">Profile Photo</h3>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm mt-1 mb-3">
                      Update your avatar. Recommended size: 400x400px.
                    </p>
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        onChange={() => toast.success("Profile photo updated.")}
                      />
                      <Button onClick={handleUploadClick} variant="outline">
                        Upload New
                      </Button>
                      <Button onClick={() => toast.message("Profile photo removed.")} variant="ghost">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Full Name</label>
                    <Input placeholder="Your full name" defaultValue={user?.name ?? "Alex Johnson"} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Username</label>
                    <Input placeholder="username" defaultValue={user?.name ?? "alexj_edu"} />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Email Address</label>
                    <Input disabled type="email" defaultValue={user?.email ?? "alex.johnson@university.edu"} />
                    <p className="text-xs text-[#4c669a] dark:text-gray-500">Contact support to change your email address.</p>
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Bio</label>
                    <Textarea placeholder="Tell us about your learning goals..." rows={4} />
                    <p className="text-xs text-[#4c669a] dark:text-gray-500 text-right">0/200 characters</p>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#202836] px-6 py-4 rounded-b-xl flex justify-end border-t border-[#e7ebf3] dark:border-[#2d3748]">
                  <Button onClick={() => toast.success("Profile saved.")}>Save Profile</Button>
                </div>
              </AccountSectionCard>
              <AccountSectionCard
                className="shadow-sm"
                headerClassName="border-b border-[#e7ebf3] dark:border-[#2d3748]"
                id="security"
                title="Password Security">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Current Password</label>
                    <Input placeholder="Enter current password" type="password" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">New Password</label>
                    <Input placeholder="Enter new password" type="password" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Confirm New Password</label>
                    <Input placeholder="Confirm new password" type="password" />
                  </div>
                </div>
                <p className="text-sm text-[#4c669a] dark:text-gray-400">
                  Password must be at least 8 characters long and include a number and a symbol.
                </p>
                <div className="bg-gray-50 dark:bg-[#202836] px-6 py-4 rounded-b-xl flex justify-end gap-3 border-t border-[#e7ebf3] dark:border-[#2d3748]">
                  <Button onClick={() => toast.message("Changes discarded.")} variant="outline">
                    Cancel
                  </Button>
                  <Button onClick={() => toast.success("Password updated.")}>Update Password</Button>
                </div>
              </AccountSectionCard>
              <AccountSectionCard
                className="shadow-sm"
                title="Danger Zone"
                headerClassName="border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10"
                bodyClassName="gap-4"
                footer={null}
                id="danger-zone">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-col gap-1 max-w-lg">
                    <h3 className="text-[#0d121b] dark:text-white font-semibold text-base">Delete Account</h3>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm">
                      Once you delete your account, there is no going back. All your learning progress and comments will be permanently removed.
                    </p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">Delete Account</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm account deletion</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action is permanent. Are you sure you want to delete your account?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => toast.error("Account deleted.")}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </AccountSectionCard>
            </main>
          </div>
        </div>
      </PageTransition>
    </UserLayout>
  );
};

export default AccountPage;

