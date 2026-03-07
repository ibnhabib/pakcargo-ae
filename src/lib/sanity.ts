import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

// This uses your existing configuration from astro.config.mjs
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}