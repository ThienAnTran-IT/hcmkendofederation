export interface ClubInfo {
  name: string
  location: string
  image: string
  url?: string
}

export interface NewsItemSummary {
  uid: string
  title: string
  summary?: string
  image: string
  link?: string
}

interface AttachmentLink {
 name: string
 url: string
}

export interface NewsItemDetail {
  uid: string
  title: string
  content: string
  date: string
  image?: string
  attachmentLinks?: AttachmentLink[]
  additionalImages?: string[]
}