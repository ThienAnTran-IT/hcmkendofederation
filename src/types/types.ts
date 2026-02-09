export interface ClubInfo {
  name: LangLabel
  location: LangLabel
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

export type Language = 'vi' | 'en'

export interface LangLabel {
  vi: string
  en: string
}

export interface TabProps {
  name: string
  label: LangLabel
  path: string
}