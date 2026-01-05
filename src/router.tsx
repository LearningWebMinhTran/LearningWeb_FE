import { Link, createRootRoute, createRoute, createRouter, Outlet, redirect } from "@tanstack/react-router";

import { Button } from "./components/ui/button";
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
import ResetPasswordPage from "./pages/ResetPasswordPage";
import PostDetailPage from "./pages/PostDetailPage";
import UserExplorePage from "./pages/user/UserExplorePage";
import UserNewFeedPage from "./pages/user/UserNewFeedPage";
import UserMyPostPage from "./pages/user/UserMyPostPage";
import UserSavedPostPage from "./pages/user/UserSavedPostPage";
import UserAnalyticsPage from "./pages/user/UserAnalyticsPage";
import UserFoldersPage from "./pages/user/UserFoldersPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminManagePostPage from "./pages/admin/AdminManagePostPage";
import AdminManageUserPage from "./pages/admin/AdminManageUserPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";
import { getAuthToken } from "./lib/auth";

const requireAuth = (redirectTo: string) => {
  const token = getAuthToken();
  if (!token) {
    throw redirect({
      to: "/auth",
      search: { redirect: redirectTo },
    });
  }
};

const redirectIfAuthenticated = (redirectTo: string) => {
  const token = getAuthToken();
  if (token) {
    throw redirect({
      to: redirectTo,
    });
  }
};

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen">
      <Outlet />
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background-light text-[#0d121b]">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-sm text-[#4c669a]">The page you are looking for does not exist.</p>
        <Button asChild className="mt-6">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    redirectIfAuthenticated("/dashboard");
  },
  component: HomePage,
});

const libraryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/library",
  component: LibraryPage,
});

const postDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/library/$slug",
  component: PostDetailPage,
});

const accountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account",
  beforeLoad: () => {
    requireAuth("/account");
  },
  component: AccountPage,
});

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
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
  beforeLoad: () => {
    requireAuth("/dashboard");
  },
  component: DashboardPage,
});

const dashboardExploreRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/explore",
  beforeLoad: () => {
    requireAuth("/dashboard/explore");
  },
  component: UserExplorePage,
});

const dashboardNewFeedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/new-feed",
  beforeLoad: () => {
    requireAuth("/dashboard/new-feed");
  },
  component: UserNewFeedPage,
});

const dashboardMyPostsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/my-posts",
  beforeLoad: () => {
    requireAuth("/dashboard/my-posts");
  },
  component: UserMyPostPage,
});

const dashboardFoldersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/folders",
  beforeLoad: () => {
    requireAuth("/dashboard/folders");
  },
  component: UserFoldersPage,
});

const dashboardSavedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/saved",
  beforeLoad: () => {
    requireAuth("/dashboard/saved");
  },
  component: UserSavedPostPage,
});

const dashboardAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/analytics",
  beforeLoad: () => {
    requireAuth("/dashboard/analytics");
  },
  component: UserAnalyticsPage,
});

const resetPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reset-password",
  component: ResetPasswordPage,
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
  postDetailRoute,
  accountRoute,
  authRoute,
  uploadRoute,
  aboutRoute,
  contactRoute,
  coursesRoute,
  communityRoute,
  dashboardRoute,
  dashboardExploreRoute,
  dashboardNewFeedRoute,
  dashboardMyPostsRoute,
  dashboardFoldersRoute,
  dashboardSavedRoute,
  dashboardAnalyticsRoute,
  resetPasswordRoute,
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
