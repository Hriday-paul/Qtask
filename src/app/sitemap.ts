import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://qtask-two.vercel.app',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://qtask-two.vercel.app/jobs',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.90,
        }
        
    ]
}