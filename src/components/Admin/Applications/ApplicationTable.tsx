import React from 'react'
import { IMeta, JobApplication } from '../../../../types/job';

async function ApplicationTable({ applicationPromise, page }: { applicationPromise: Promise<{ data: { data: JobApplication[], meta: IMeta } }>, page: number }) {

    const applications = await applicationPromise;

    return (
        <div>
            
        </div>
    )
}

export default ApplicationTable