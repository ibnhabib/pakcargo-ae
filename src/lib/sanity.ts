import { sanityClient } from 'sanity:client';
// UPDATED: Using the named export to resolve deprecation warning
import { createImageUrlBuilder } from '@sanity/image-url';
import { SITE_SETTINGS_QUERY, SERVICES_QUERY, ORIGIN_HUBS_QUERY, DESTINATION_HUBS_QUERY } from './queries';
import type {
  SITE_SETTINGS_QUERY_RESULT,
  SERVICES_QUERY_RESULT,
  ORIGIN_HUBS_QUERY_RESULT,
  DESTINATION_HUBS_QUERY_RESULT,
} from '../sanity.types';

// Use the new builder method
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  // Ensure we return a valid builder object
  return builder.image(source);
}

let cachedSettings: Promise<SITE_SETTINGS_QUERY_RESULT> | null = null;

/** Fetches `siteSettings` once per build/request and reuses the result. */
export function getSiteSettings() {
  if (!cachedSettings) {
    cachedSettings = sanityClient.fetch(SITE_SETTINGS_QUERY);
  }
  return cachedSettings;
}

let cachedServices: Promise<SERVICES_QUERY_RESULT> | null = null;

/** Fetches all `service` documents (ordered by priority) once and reuses the result. */
export function getServices() {
  if (!cachedServices) {
    cachedServices = sanityClient.fetch(SERVICES_QUERY);
  }
  return cachedServices;
}

let cachedOriginHubs: Promise<ORIGIN_HUBS_QUERY_RESULT> | null = null;

/** Fetches all `originHub` (UAE pickup city) documents once and reuses the result. */
export function getOriginHubs() {
  if (!cachedOriginHubs) {
    cachedOriginHubs = sanityClient.fetch(ORIGIN_HUBS_QUERY);
  }
  return cachedOriginHubs;
}

let cachedDestinationHubs: Promise<DESTINATION_HUBS_QUERY_RESULT> | null = null;

/** Fetches all `destinationHub` (Pakistan delivery city) documents once and reuses the result. */
export function getDestinationHubs() {
  if (!cachedDestinationHubs) {
    cachedDestinationHubs = sanityClient.fetch(DESTINATION_HUBS_QUERY);
  }
  return cachedDestinationHubs;
}
