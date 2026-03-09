import siteSettings from './siteSettings'
import rateCard from './rateCard'
import service from './service'
import trustPoints from './trustPoints'
import partner from './partner'
import author from './author'
import post from './post'
import faqItem from './objects/faqItem'
import homepage from './homepage'
import contactChannel from './contactChannel'
// NEW: Import blockContent for Rich Text support
import blockContent from './blockContent'

export const schemaTypes = [
  // Settings & Global
  siteSettings,
  homepage,
  contactChannel,

  // Core Business
  service,
  rateCard,

  // Blog & Content
  post,
  author,

  // Social Proof & Trust
  partner,
  trustPoints,

  // Reusable Objects
  faqItem,
  blockContent, // Added here to enable Portable Text editing
]
