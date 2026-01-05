import { useQuery, useQueryClient } from "@tanstack/react-query";
import { apiGet } from "./api";

export type AuthUser = {
  _id?: string;
  id?: string;
  name?: string;
  email?: string;
  avatar?: string;
  role?: string;
  [key: string]: unknown;
};

type AuthMePayload = {
  user?: AuthUser;
  additionalProp1?: AuthUser;
  [key: string]: unknown;
};

const AUTH_TOKEN_KEY = "auth_token";
const AUTH_BEARER_KEY = "auth_bearer";
const AUTH_USER_KEY = "auth_user";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const getAuthToken = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const getAuthBearer = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const stored = localStorage.getItem(AUTH_BEARER_KEY);
  if (stored) {
    return stored;
  }
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return token ? `Bearer ${token}` : null;
};

export const getStoredUser = (): AuthUser | null => {
  if (typeof window === "undefined") {
    return null;
  }
  const raw = localStorage.getItem(AUTH_USER_KEY);
  if (!raw) {
    return null;
  }
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
};

export const setAuthSession = (token: string, user?: AuthUser | null) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(AUTH_BEARER_KEY, `Bearer ${token}`);
  if (user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  }
};

export const clearAuthSession = () => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_BEARER_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
};

const resolveAuthUser = (payload: AuthMePayload | null): AuthUser | null => {
  if (!payload || !isObject(payload)) {
    return null;
  }
  if (payload.user && isObject(payload.user)) {
    return payload.user as AuthUser;
  }
  if (payload.additionalProp1 && isObject(payload.additionalProp1)) {
    return payload.additionalProp1 as AuthUser;
  }
  return payload as AuthUser;
};

const fetchAuthMe = async (token: string) => {
  const data = await apiGet<AuthMePayload>("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return resolveAuthUser(data);
};

export const useAuthMe = () => {
  const token = getAuthToken();
  const storedUser = getStoredUser();

  return useQuery<AuthUser | null>({
    queryKey: ["auth-me"],
    queryFn: async () => {
      const remoteUser = await fetchAuthMe(token ?? "");
      if (!storedUser) {
        return remoteUser;
      }
      if (!remoteUser) {
        return storedUser;
      }
      return { ...storedUser, ...remoteUser };
    },
    enabled: Boolean(token),
    initialData: storedUser ?? null,
    staleTime: 1000 * 60 * 5,
  });
};

export const useAuthActions = () => {
  const queryClient = useQueryClient();

  const logout = () => {
    clearAuthSession();
    queryClient.removeQueries({ queryKey: ["auth-me"] });
  };

  return { logout };
};
