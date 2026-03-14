import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";
import GetFeatureJobs from "@/lib/services/FeatureJobs";
import { GetJobs } from "@/lib/services/Quary.Jobs";

export default async function Home() {

  const featureJobPromise = GetFeatureJobs();

  const newJobPromise = GetJobs({ query: {} });

  return (
    <div className="">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 jobPromise={featureJobPromise} />
      <Section6 jobPromise={newJobPromise}/>
    </div>
  );
}
