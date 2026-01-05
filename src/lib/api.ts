export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://be-xi-two.vercel.app";

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.status = status;
  }
}

const buildUrl = (path: string) => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = API_BASE_URL.replace(/\/$/, "");
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base}${suffix}`;
};

export const apiPost = async <T>(path: string, body: unknown, init?: RequestInit) => {
  const response = await fetch(buildUrl(path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    body: JSON.stringify(body ?? {}),
    ...init,
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    throw new ApiError(payload?.message ?? "Request failed.", response.status);
  }

  return payload.data;
};

export const apiGet = async <T>(path: string, init?: RequestInit) => {
  const response = await fetch(buildUrl(path), {
    method: "GET",
    headers: {
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok || !payload?.success) {
    throw new ApiError(payload?.message ?? "Request failed.", response.status);
  }

  return payload.data;
};

export type LoginData = {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    __v: number;
  };
};
