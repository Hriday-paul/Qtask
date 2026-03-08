
const env = process.env.NEXT_PUBLIC_production as "production" | "dev";

export const config = {
  serverBaseApi: process.env.SERVER_BASE_API,

  clientBaseApi: process.env.NEXT_PUBLIC_BASE_API,

  hasSSL: process.env.HAS_SSL == "true" ? true : false,

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
  { "id": 6, "name": "Bachelor's Degree", value : "bsc" },
  { "id": 7, "name": "Master's Degree", value : "msc" },
  { "id": 5, "name": "Diploma", value : "diploma"  },
  { "id": 9, "name": "PhD / Doctorate", value : "phd"  }
]