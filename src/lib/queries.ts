import { defineQuery } from 'groq';

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings"][0]{
  title,
  description,
  keywords,
  siteUrl,
  gtmId,
  gaId,
  siteVerificationCode,
  semrushCode,
  businessName,
  legalName,
  address,
  geoCoordinates,
  phone,
  whatsappNumber,
  tradeLicense,
  openingHours,
  socialLinks,
  mainServiceAreas,
  headerMenu,
  footerMenu,
  ogImage {
    asset->{ url }
  }
}`);

export const SERVICES_QUERY = defineQuery(`*[_type == "service"] | order(order asc)`);

export const SERVICES_WITH_DETAILS_QUERY = defineQuery(`*[_type == "service"]{
  ...,
  rateTable,
  faqs[] {
    question,
    atomicAnswer,
    detailedAnswer,
    lastReviewed
  }
}`);

export const HOMEPAGE_QUERY = defineQuery(`*[_type == "homepage"][0]{
  ...,
  featuredServices[]->,
  featuredTrustPoints->,
  featuredPartners[]->,
  faqs[] {
    question,
    atomicAnswer,
    detailedAnswer,
    lastReviewed
  },
  seoTitle,
  seoDescription,
  seoKeywords
}`);

export const RATE_CARDS_QUERY = defineQuery(`*[_type == "rateCard"] | order(order asc)`);

export const TRUST_POINTS_QUERY = defineQuery(`*[_type == "trustPoints"][0]`);

export const PARTNERS_QUERY = defineQuery(`*[_type == "partner"]`);

export const PAGE_OR_SERVICE_SLUGS_QUERY = defineQuery(`*[_type in ["page", "service"]]`);

export const ABOUT_PAGE_QUERY = defineQuery(`*[_type == "page" && _id == "about-us"][0]`);

export const CONTACT_PAGE_QUERY = defineQuery(`*[_type == "page" && _id == "contact"][0]`);

export const BLOG_POSTS_LIST_QUERY = defineQuery(`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  mainImage,
  publishedAt,
  metaDescription,
  "authorName": author->name
}`);

export const BLOG_POST_SLUGS_QUERY = defineQuery(`*[_type == "post"]`);

export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == "author" && _id == $authorRef][0]`
);

export const RECENT_POSTS_QUERY = defineQuery(
  `*[_type == "post"] | order(order asc, publishedAt desc)[0...3] {
    title,
    slug,
    mainImage,
    publishedAt,
    metaDescription,
    topic
  }`
);

export const ACTIVE_CONTACT_CHANNELS_QUERY = defineQuery(
  `*[_type == "contactChannel" && isActive == true] | order(priority asc)`
);
