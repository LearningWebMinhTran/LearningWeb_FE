import { createRootRoute, createRoute, createRouter, Outlet, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import CommunityPage from "./pages/CommunityPage";
import DashboardPage from "./pages/DashboardPage";
import PostDetailPage from "./pages/PostDetailPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import BlogPage from "./pages/BlogPage";
import BlogBriefPage from "./pages/BlogBriefPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminManagePostPage from "./pages/admin/AdminManagePostPage";
import AdminManageUserPage from "./pages/admin/AdminManageUserPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";

const RootLayout = () => {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="min-h-screen"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}>
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background-light text-[#0d121b]">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-sm text-[#4c669a]">The page you are looking for does not exist.</p>
      </div>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/library",
  component: LibraryPage,
});

const accountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account",
  component: AccountPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const uploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/upload",
  component: UploadPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: CoursesPage,
});

const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/community",
  component: CommunityPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: DashboardPage,
});

const postDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/posts/$slug",
  component: PostDetailPage,
});

const resetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reset-password",
  component: ResetPasswordPage,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/learning",
  component: BlogPage,
});

const blogBriefRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogBriefPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminDashboardPage,
});

const adminPostsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/posts",
  component: AdminManagePostPage,
});

const adminUsersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/users",
  component: AdminManageUserPage,
});

const adminSettingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/settings",
  component: AdminSettingsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  libraryRoute,
  accountRoute,
  loginRoute,
  uploadRoute,
  aboutRoute,
  contactRoute,
  coursesRoute,
  communityRoute,
  dashboardRoute,
  postDetailRoute,
  resetPasswordRoute,
  blogRoute,
  blogBriefRoute,
  registerRoute,
  adminDashboardRoute,
  adminPostsRoute,
  adminUsersRoute,
  adminSettingsRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
