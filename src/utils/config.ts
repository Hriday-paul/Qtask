
const env = process.env.NEXT_PUBLIC_production as "production" | "dev";

export const config = {
  serverBaseApi: process.env.SERVER_BASE_API,

  clientBaseApi: process.env.NEXT_PUBLIC_BASE_API,

  hasSSL: process.env.HAS_SSL == "true" ? true : false,

  imgBase: process.env.NEXT_PUBLIC_REMOTE_IMG_BASE,

  //   myDomain: process.env.MY_DOMAIN,

  MAP_KEY: process.env.NEXT_PUBLIC_MAP_KEY,

  env: env
};

export const placeHolderBlurImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWnpaaXiDhOAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII='

export const divisions = [
  { "id": 1, "name": "Dhaka" },
  { "id": 2, "name": "Chattogram" },
  { "id": 3, "name": "Rajshahi" },
  { "id": 4, "name": "Khulna" },
  { "id": 5, "name": "Barishal" },
  { "id": 6, "name": "Sylhet" },
  { "id": 7, "name": "Rangpur" },
  { "id": 8, "name": "Mymensingh" }
];

export const educations = [
  { "id": 60, "name": "Bachelor's Degree", value: "bsc" },
  { "id": 61, "name": "Master's Degree", value: "msc" },
  { "id": 62, "name": "Diploma", value: "diploma" },
  { "id": 63, "name": "PhD / Doctorate", value: "phd" }
]

export type JobCategory =
  | "DESIGN"
  | "SALES"
  | "MARKETING"
  | "FINANCE"
  | "TECHNOLOGY"
  | "ENGINEERING"
  | "BUSINESS"
  | "HUMAN_RESOURCE";

export const JOB_CATEGORY_STYLES: Record<JobCategory, { label: string; className: string, icon : string }> = {
  DESIGN: { label: "Design", className: "bg-pink-100 text-pink-500" , icon : "/home/sec3/c1.png"},
  SALES: { label: "Sales", className: "bg-yellow-100 text-yellow-600", icon : "/home/sec3/c2.png" },
  MARKETING: { label: "Marketing", className: "bg-orange-100 text-orange-500", icon : "/home/sec3/c3.png" },
  FINANCE: { label: "Finance", className: "bg-purple-100 text-purple-500", icon : "/home/sec3/c4.png" },
  TECHNOLOGY: { label: "Technology", className: "bg-red-500/10 text-red-500", icon : "/home/sec3/c5.png" },
  ENGINEERING: { label: "Engineering", className: "bg-blue-100 text-blue-500", icon : "/home/sec3/c6.png" },
  BUSINESS: { label: "Business", className: "bg-primary/10 text-primary", icon : "/home/sec3/c7.png" },
  HUMAN_RESOURCE: { label: "Human Resource", className: "bg-teal-100 text-teal-600", icon : "/home/sec3/c8.png" },
};

export const categories = [
  {
    id: 1,
    label: "Desing",
    value: "DESIGN"
  },
  {
    id: 2,
    label: "Sales",
    value: "SALES"
  },
  {
    id: 3,
    label: "Marketing",
    value: "MARKETING"
  },
  {
    id: 4,
    label: "Finance",
    value: "FINANCE"
  },
  {
    id: 5,
    label: "Technology",
    value: "TECHNOLOGY"
  },
  {
    id: 6,
    label: "Engineering",
    value: "ENGINEERING"
  },
  {
    id: 7,
    label: "Business",
    value: "BUSINESS"
  },
  {
    id: 8,
    label: "Human Resource",
    value: "HUMAN_RESOURCE"
  }
]