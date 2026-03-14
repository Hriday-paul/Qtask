import { config } from "./config";

const BASE_IMAGE_URL = config.imgBase;

export function getImageUrl(path?: string | null) {
  if (!path) return "/empty_logo.png";

  if (path.startsWith("http")) return path;

  return BASE_IMAGE_URL + path;
}