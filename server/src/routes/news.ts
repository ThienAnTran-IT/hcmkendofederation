import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { readDb, writeDb } from '../services/fileDb'
import { requireAuth } from '../middleware/auth'
import { newsUpload } from '../middleware/upload'

const router = Router()

router.get('/', (req, res) => {
  const all = readDb<any[]>('news-summaries.json')
  if (req.isAuthenticated()) {
    return res.json(all)
  }
  res.json(all.filter((n) => n.status === 'Published'))
})

router.get('/:uid', (req, res) => {
  const details = readDb<any[]>('news-details.json')
  const item = details.find((n) => n.uid === req.params.uid)
  if (!item) return res.status(404).json({ error: 'Not found' })
  res.json(item)
})

router.post('/', requireAuth, newsUpload.single('image') as any, (req, res) => {
  const summaries = readDb<any[]>('news-summaries.json')
  const details = readDb<any[]>('news-details.json')

  const uid = uuidv4()
  const imageUrl = req.file ? `/uploads/news/${req.file.filename}` : req.body.imageUrl || ''

  const summary = {
    uid,
    title: req.body.title,
    summary: req.body.summary || '',
    image: imageUrl,
    link: `/news/${uid}`,
    status: 'Draft',
  }

  const detail = {
    uid,
    title: req.body.title,
    content: req.body.content || '',
    date: req.body.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    image: imageUrl,
    attachmentLinks: req.body.attachmentLinks ? JSON.parse(req.body.attachmentLinks) : [],
  }

  summaries.unshift(summary)
  details.unshift(detail)
  writeDb('news-summaries.json', summaries)
  writeDb('news-details.json', details)

  res.status(201).json({ summary, detail })
})

router.put('/:uid', requireAuth, newsUpload.single('image') as any, (req, res) => {
  const summaries = readDb<any[]>('news-summaries.json')
  const details = readDb<any[]>('news-details.json')

  const summaryIdx = summaries.findIndex((n) => n.uid === req.params.uid)
  const detailIdx = details.findIndex((n) => n.uid === req.params.uid)

  if (summaryIdx === -1 || detailIdx === -1) {
    return res.status(404).json({ error: 'Not found' })
  }

  const imageUrl = req.file
    ? `/uploads/news/${req.file.filename}`
    : req.body.imageUrl || summaries[summaryIdx].image

  summaries[summaryIdx] = {
    ...summaries[summaryIdx],
    title: req.body.title || summaries[summaryIdx].title,
    summary: req.body.summary !== undefined ? req.body.summary : summaries[summaryIdx].summary,
    image: imageUrl,
  }

  details[detailIdx] = {
    ...details[detailIdx],
    title: req.body.title || details[detailIdx].title,
    content: req.body.content !== undefined ? req.body.content : details[detailIdx].content,
    date: req.body.date || details[detailIdx].date,
    image: imageUrl,
    attachmentLinks: req.body.attachmentLinks ? JSON.parse(req.body.attachmentLinks) : details[detailIdx].attachmentLinks,
  }

  writeDb('news-summaries.json', summaries)
  writeDb('news-details.json', details)

  res.json({ summary: summaries[summaryIdx], detail: details[detailIdx] })
})

router.patch('/:uid/status', requireAuth, (req, res) => {
  const { status } = req.body as { status: 'Published' | 'Draft' }
  if (status !== 'Published' && status !== 'Draft') {
    return res.status(400).json({ error: 'Invalid status' })
  }
  const summaries = readDb<any[]>('news-summaries.json')
  const idx = summaries.findIndex((n) => n.uid === req.params.uid)
  if (idx === -1) return res.status(404).json({ error: 'Not found' })
  summaries[idx] = { ...summaries[idx], status }
  writeDb('news-summaries.json', summaries)
  res.json(summaries[idx])
})

router.delete('/:uid', requireAuth, (req, res) => {
  writeDb('news-summaries.json', readDb<any[]>('news-summaries.json').filter((n) => n.uid !== req.params.uid))
  writeDb('news-details.json', readDb<any[]>('news-details.json').filter((n) => n.uid !== req.params.uid))
  res.json({ success: true })
})

export default router
