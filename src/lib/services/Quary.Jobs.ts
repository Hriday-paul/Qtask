import { config } from "@/utils/config";
import { tags } from "../Tags";
import { serverQueryWithReauth } from "./Mutation.Ad";

export const GetJobs = async ({ query }: { query: { [key: string]: string } }) => {

  try {

    const queryString = query ? `?${new URLSearchParams(query).toString()}` : "";

    const response = await fetch(
      config.serverBaseApi + "/jobs" + queryString,
      {
        next: {
          tags: [tags.jobs],
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      throw new Error(
        errorData?.message || "Failed to load jobs"
      );
    }
    const res = response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export const GetCategories = async () => {

  try {

    const response = await fetch(
      config.serverBaseApi + "/jobs/categories",
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);

      throw new Error(
        errorData?.message || "Failed to load categories"
      );
    }
    const res = response.json();
    return res;
  } catch (err) {
    throw err;
  }
};

export const GetApplications = async ({ query }: { query: { [key: string]: string } }) => {

  const queryString = query ? `?${new URLSearchParams(query).toString()}` : "";

  try {
    const res = await serverQueryWithReauth({ payload: JSON.stringify({}), endPoint: "/applications" + queryString, method: "GET", tags: [tags.applications] });
    return res;
  } catch (err) {
    throw err;
  }
};