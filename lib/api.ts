/**
 * Professional Official Website API Client
 * Connects to GoTechEdu Central Backend API
 */

const rawApiUrl = (
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "http://localhost:5000/api"
).trim().replace(/\/+$/, "");

export const API_BASE_URL = rawApiUrl
  ? rawApiUrl.endsWith("/api")
    ? rawApiUrl
    : `${rawApiUrl}/api`
  : "http://localhost:5000/api";

async function fetchJson<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T | null> {
  if (!API_BASE_URL) {
    return null;
  }

  try {
    const formattedEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${API_BASE_URL}${formattedEndpoint}`;
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };

    const res = await fetch(url, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const errJson = await res.json().catch(() => null);
      if (errJson && typeof errJson === "object") {
        return errJson as T;
      }
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    // Graceful offline fallback: If backend server is starting or unreachable, return null quietly
    return null;
  }
}

export const officialApi = {
  // 1. Learning Hub / Courses
  getCourses: async (params: { category?: string; search?: string } = {}) => {
    const query = new URLSearchParams();
    if (params.category && params.category !== "All")
      query.append("category", params.category);
    if (params.search) query.append("search", params.search);
    const qs = query.toString();
    return fetchJson<{ success: boolean; count: number; courses: any[] }>(
      `/courses${qs ? `?${qs}` : ""}`,
    );
  },

  getCourseById: async (id: string) => {
    return fetchJson<{ success: boolean; course: any }>(`/courses/${id}`);
  },

  submitCourseApplication: async (data: {
    courseId?: string | null;
    courseTitle: string;
    studentName: string;
    email: string;
    phone: string;
    collegeOrCompany?: string;
    experienceLevel?: string;
    learningGoal?: string;
    modePreference?: string;
  }) => {
    return fetchJson<{ success: boolean; message: string; application: any }>(
      "/course-applications",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );
  },

  // 2. Careers / Job Openings
  getJobs: async (params: { department?: string; search?: string } = {}) => {
    const query = new URLSearchParams();
    if (params.department && params.department !== "All")
      query.append("department", params.department);
    if (params.search) query.append("search", params.search);
    const qs = query.toString();
    return fetchJson<{ success: boolean; count: number; jobs: any[] }>(
      `/jobs${qs ? `?${qs}` : ""}`,
    );
  },

  getJobById: async (id: string) => {
    return fetchJson<{ success: boolean; job: any }>(`/jobs/${id}`);
  },

  submitJobApplication: async (data: {
    jobTitle: string;
    department?: string;
    name: string;
    email: string;
    phone: string;
    experience?: string;
    currentCompany?: string;
    expectedCTC?: string;
    noticePeriod?: string;
    portfolioUrl?: string;
    coverLetter?: string;
  }) => {
    return fetchJson<{ success: boolean; message: string; application: any }>(
      "/job-applications",
      {
        method: "POST",
        body: JSON.stringify(data),
      },
    );
  },

  // 3. Blogs & Insights
  getBlogs: async (params: { category?: string; search?: string } = {}) => {
    const query = new URLSearchParams();
    if (params.category && params.category !== "All")
      query.append("category", params.category);
    if (params.search) query.append("search", params.search);
    const qs = query.toString();
    return fetchJson<{ success: boolean; count: number; blogs: any[] }>(
      `/blogs${qs ? `?${qs}` : ""}`,
    );
  },

  getBlogBySlug: async (slug: string) => {
    return fetchJson<{ success: boolean; blog: any }>(`/blogs/${slug}`);
  },

  // 4. Contact & Enterprise Technical Consultation
  submitContactInquiry: async (data: {
    fullName: string;
    email: string;
    phone: string;
    company?: string;
    service?: string;
    budget?: string;
    message: string;
    source?: string;
  }) => {
    return fetchJson<{
      success: boolean;
      message: string;
      inquiryId?: string;
      inquiry?: any;
    }>("/contacts", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

export default officialApi;
