import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://runbd.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://runbd.com/jobs',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.90,
        }
        
    ]
}