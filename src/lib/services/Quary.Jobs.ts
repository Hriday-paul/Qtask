import { config } from "@/utils/config";
import { tags } from "../Tags";

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