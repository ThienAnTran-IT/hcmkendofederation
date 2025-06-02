export interface ClubInfo {
  name: string
  location: string
  image: string
}

export interface NewsItemSummary {
  uid: string
  title: string
  summary: string
  link?: string
  image?: string
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
}