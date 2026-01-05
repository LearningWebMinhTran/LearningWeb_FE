import { useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { LogOut } from "lucide-react";

import AccountSectionCard from "../components/organisms/AccountSectionCard";
import UserNavbar from "../components/organisms/UserNavbar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
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

  const handleLogout = () => {
    toast.success("Logged out successfully.");
    navigate({ to: "/login" });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white min-h-screen flex flex-col font-display">
      <UserNavbar />
      <div className="flex flex-1 w-full justify-center py-5 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col max-w-[1200px] flex-1 w-full">
          <div className="flex flex-wrap gap-2 px-4 py-2 text-sm text-[#4c669a] dark:text-gray-400">
            <Link className="hover:text-primary" to="/dashboard">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-[#0d121b] dark:text-white">Account Settings</span>
          </div>
          <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-3">
              <h1 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Account Settings
              </h1>
              <p className="text-[#4c669a] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                Manage your profile details, update your password, and control your security preferences here.
              </p>
            </div>
            <Button className="self-start" onClick={handleLogout} variant="outline">
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 px-4">
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
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBuHSDyQ9Z9RhSu_4zIqhN1jP0Y_csDDSli5PNJDmFH3yExp5JMgueOPnmXEhI4V7eldSx8Gy3xW-w65PxMbfhzZFl4-YABtGOjlKi6-XiVGR8slbXFypSnN7lpZ9wIcvVZXEbxlIoU8uNyDhKejGZH1muzChJ3CmTq2y9f2RDYifSvDVuFh5wRq6qE5OE-Ty85v-oUtY0bPfxVYmVqu4zrFwKOYweMPpxnNJ2H9MfM7G-Ubwp3i1l5Yt_Ov1jUgguiqff17sAyVkn"
                      />
                      <AvatarFallback>AJ</AvatarFallback>
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
                    <Input placeholder="Your full name" defaultValue="Alex Johnson" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Username</label>
                    <Input placeholder="username" defaultValue="alexj_edu" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium text-[#0d121b] dark:text-white">Email Address</label>
                    <Input disabled type="email" defaultValue="alex.johnson@university.edu" />
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
      </div>
    </div>
  );
};

export default AccountPage;

