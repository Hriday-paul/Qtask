import { config } from "@/utils/config";
import { tags } from "../Tags";

const GetFeatureJobs = async () => {
    try {
        const response = await fetch(
            config.serverBaseApi + `/jobs/feature/`,
            {
                next: {
                    tags: [tags.featureJobs],
                },
            }
        );
        if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to load data");
        }
        const res = response.json();
        return res;
    } catch (err) {
        throw err;
    }
};

export default GetFeatureJobs;
