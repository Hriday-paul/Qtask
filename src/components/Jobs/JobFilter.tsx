"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { divisions, educations } from "@/utils/config";
import { categoryList } from "../Home/Section3";


function JobFilter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const selectedJobTypes = searchParams.get("jobType")?.split(",") || [];
    const selecteemployment_types = searchParams.get("employmentType")?.split(",") || [];

    const selecteddivisions = searchParams.get("division")?.split(",") || [];
    const selectededucations = searchParams.get("education")?.split(",") || [];

    const updateQueryParam = useCallback(
        (key: string, value: string, targetId?: string) => {
            const currentValues = searchParams.get(key)?.split(",") || [];

            let newValues: string[];
            if (currentValues.includes(value)) {
                newValues = currentValues.filter((v) => v !== value);
            } else {
                newValues = [...currentValues, value];
            }

            const params = new URLSearchParams(searchParams.toString());
            if (newValues.length > 0) {
                params.set(key, newValues.join(","));
            } else {
                params.delete(key);
            }

            router.push(`${pathname}?${params.toString()}`, { scroll: false });

            // optional scroll to element
            setTimeout(() => {
                if (targetId) {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);
        },
        [searchParams, router]
    );

    return (
        <div className="space-y-5">

            {/* ------------- job type filter--------- */}
            <Accordion type="single" collapsible className="bg-white px-4 rounded-lg border border-stroke" defaultValue="Job Type">
                <AccordionItem value="Job Type">
                    <AccordionTrigger className="text-lg font-popin font-medium hover:no-underline cursor-pointer">Job Type</AccordionTrigger>
                    <AccordionContent className="border-t border-stroke pt-4 space-y-3">
                        {
                            ["Onsite", "Remote"].map(i => {
                                const isChecked = selectedJobTypes.includes(i);
                                return <div key={i} className="flex items-center gap-3">
                                    <Checkbox id={i} className="size-5 cursor-pointer" checked={isChecked} onCheckedChange={() => updateQueryParam("jobType", i)} />
                                    <label htmlFor={i} className="font-epilogue text-base cursor-pointer">{i}</label>
                                </div>
                            })
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* ------------- employment type filter--------- */}
            <Accordion type="single" collapsible className="bg-white px-4 rounded-lg border border-stroke" defaultValue="bike_type">
                <AccordionItem value="bike_type">
                    <AccordionTrigger className="text-lg font-epilogue font-medium hover:no-underline cursor-pointer">Employment Type</AccordionTrigger>
                    <AccordionContent className="border-t border-stroke pt-4 space-y-3">
                        {
                            ["Fulltime", "Parttime"].map(i => {
                                const isChecked = selecteemployment_types.includes(i);
                                return <div key={i} className="flex items-center gap-3">
                                    <Checkbox id={i} className="size-5 cursor-pointer" checked={isChecked} onCheckedChange={() => updateQueryParam("employmentType", i)} />
                                    <label htmlFor={i} className="font-epilogue text-base cursor-pointer">{i}</label>
                                </div>
                            })
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* --------Education-------- */}
            <Accordion type="single" defaultValue="education" collapsible className="bg-white px-4 rounded-lg border border-stroke">
                <AccordionItem value="education">
                    <AccordionTrigger className="text-lg font-epilogue font-medium hover:no-underline cursor-pointer">Education</AccordionTrigger>
                    <AccordionContent className="border-t border-stroke pt-4 space-y-3">
                        {
                            educations.map(i => {
                                const isChecked = selecteemployment_types.includes(i?.value);
                                return <div key={i?.id} className="flex items-center gap-3">
                                    <Checkbox id={i?.id.toString()} className="size-5 cursor-pointer" checked={isChecked} onCheckedChange={() => updateQueryParam("employmentType", i.value)} />
                                    <label htmlFor={i.id.toString()} className="font-epilogue text-base cursor-pointer">{i?.name}</label>
                                </div>
                            })
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* -----------Division Filter------------ */}
            <Accordion type="single" collapsible className="bg-white px-4 rounded-lg border border-stroke" defaultValue="categoryList">
                <AccordionItem value="categoryList">
                    <AccordionTrigger className="text-lg font-epilogue font-medium hover:no-underline cursor-pointer">Categories</AccordionTrigger>
                    <AccordionContent className="border-t border-stroke pt-4 space-y-3">
                        {
                            categoryList?.map(i => {
                                const isChecked = selecteddivisions.includes(i?.title);
                                return <div key={i?.id} className="flex items-center gap-3">
                                    <Checkbox id={i?.id.toString()} className="size-5 cursor-pointer" checked={isChecked} onCheckedChange={() => updateQueryParam("division", i?.title)} />
                                    <label htmlFor={i?.id.toString()} className="font-epilogue text-base cursor-pointer">{i?.title}</label>
                                </div>
                            })
                        }
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default JobFilter
