import { Router } from 'express'
import { readDb, writeDb } from '../services/fileDb'
import { requireAuth } from '../middleware/auth'

const SECTIONS: Record<string, string> = {
  header: 'content-header.json',
  story: 'content-story.json',
  'latest-news-labels': 'content-latest-news-labels.json',
}

const router = Router()

router.get('/:section', (req, res) => {
  const file = SECTIONS[req.params.section]
  if (!file) return res.status(404).json({ error: 'Unknown section' })
  res.json(readDb(file))
})

router.put('/:section', requireAuth, (req, res) => {
  const file = SECTIONS[req.params.section]
  if (!file) return res.status(404).json({ error: 'Unknown section' })
  writeDb(file, req.body)
  res.json(req.body)
})

export default router
