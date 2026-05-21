import * as React from 'react'
import { useEffect, useState } from 'react'
import { AdminLayout } from './AdminLayout'

type LangLabel = { vi: string; en: string }

interface HeaderContent {
  title_line1: LangLabel
  title_line2: LangLabel
  desc_part1: LangLabel
  desc_part2: LangLabel
  desc_part3: LangLabel
}

interface StoryContent {
  title: LangLabel
  story_part1: LangLabel
  story_part2: LangLabel
  story_part3: LangLabel
}

function LangField({ label, value, onChange }: { label: string; value: LangLabel; onChange: (v: LangLabel) => void }) {
  return (
    <div className="mb-4">
      <div className="text-sm font-medium text-gray-700 mb-2">{label}</div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-xs text-gray-400 mb-1">Vietnamese</div>
          <textarea
            rows={3}
            value={value.vi}
            onChange={(e) => onChange({ ...value, vi: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
          />
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">English</div>
          <textarea
            rows={3}
            value={value.en}
            onChange={(e) => onChange({ ...value, en: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#47619e]"
          />
        </div>
      </div>
    </div>
  )
}

export const ContentManager: React.FC = () => {
  const [tab, setTab] = useState<'header' | 'story'>('header')
  const [header, setHeader] = useState<HeaderContent | null>(null)
  const [story, setStory] = useState<StoryContent | null>(null)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch('/api/content/header').then((r) => r.json()).then(setHeader)
    fetch('/api/content/story').then((r) => r.json()).then(setStory)
  }, [])

  const handleSaveHeader = async () => {
    if (!header) return
    setSaving(true)
    await fetch('/api/content/header', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(header),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleSaveStory = async () => {
    if (!story) return
    setSaving(true)
    await fetch('/api/content/story', {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(story),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  if (!header || !story) return <AdminLayout><div className="p-8 text-gray-400">Loading...</div></AdminLayout>

  return (
    <AdminLayout>
      <div className="p-8 max-w-4xl">
        <h1 className="text-2xl font-bold text-[#0d111c] mb-6">Content</h1>

        <div className="flex gap-2 mb-6">
          {(['header', 'story'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === t ? 'bg-[#47619e] text-white' : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {t === 'header' ? 'Home Header' : 'Our Story'}
            </button>
          ))}
        </div>

        {tab === 'header' && (
          <div>
            <LangField label="Title Line 1" value={header.title_line1} onChange={(v) => setHeader({ ...header, title_line1: v })} />
            <LangField label="Title Line 2" value={header.title_line2} onChange={(v) => setHeader({ ...header, title_line2: v })} />
            <LangField label="Description Part 1" value={header.desc_part1} onChange={(v) => setHeader({ ...header, desc_part1: v })} />
            <LangField label="Description Part 2" value={header.desc_part2} onChange={(v) => setHeader({ ...header, desc_part2: v })} />
            <LangField label="Description Part 3" value={header.desc_part3} onChange={(v) => setHeader({ ...header, desc_part3: v })} />
            <button
              onClick={handleSaveHeader}
              disabled={saving}
              className="bg-[#47619e] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3a5089] disabled:opacity-50 transition-colors"
            >
              {saving ? 'Saving...' : saved ? 'Saved!' : 'Save'}
            </button>
          </div>
        )}

        {tab === 'story' && (
          <div>
            <LangField label="Title" value={story.title} onChange={(v) => setStory({ ...story, title: v })} />
            <LangField label="Part 1" value={story.story_part1} onChange={(v) => setStory({ ...story, story_part1: v })} />
            <LangField label="Part 2" value={story.story_part2} onChange={(v) => setStory({ ...story, story_part2: v })} />
            <LangField label="Part 3" value={story.story_part3} onChange={(v) => setStory({ ...story, story_part3: v })} />
            <button
              onClick={handleSaveStory}
              disabled={saving}
              className="bg-[#47619e] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#3a5089] disabled:opacity-50 transition-colors"
            >
              {saving ? 'Saving...' : saved ? 'Saved!' : 'Save'}
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
