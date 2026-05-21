import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { readDb, writeDb } from '../services/fileDb'
import { requireAuth } from '../middleware/auth'
import { clubsUpload } from '../middleware/upload'

const router = Router()

router.get('/', (_req, res) => {
  res.json(readDb<any[]>('clubs.json'))
})

router.post('/', requireAuth, clubsUpload.single('image') as any, (req, res) => {
  const clubs = readDb<any[]>('clubs.json')
  const imageUrl = req.file ? `/uploads/clubs/${req.file.filename}` : req.body.imageUrl || ''

  const club = {
    id: uuidv4(),
    name: typeof req.body.name === 'string' ? JSON.parse(req.body.name) : req.body.name,
    location: typeof req.body.location === 'string' ? JSON.parse(req.body.location) : req.body.location,
    image: imageUrl,
    url: req.body.url || '',
  }

  clubs.push(club)
  writeDb('clubs.json', clubs)
  res.status(201).json(club)
})

router.put('/:id', requireAuth, clubsUpload.single('image') as any, (req, res) => {
  const clubs = readDb<any[]>('clubs.json')
  const idx = clubs.findIndex((c) => c.id === req.params.id)
  if (idx === -1) return res.status(404).json({ error: 'Not found' })

  const imageUrl = req.file
    ? `/uploads/clubs/${req.file.filename}`
    : req.body.imageUrl || clubs[idx].image

  clubs[idx] = {
    ...clubs[idx],
    name: req.body.name ? (typeof req.body.name === 'string' ? JSON.parse(req.body.name) : req.body.name) : clubs[idx].name,
    location: req.body.location
      ? (typeof req.body.location === 'string' ? JSON.parse(req.body.location) : req.body.location)
      : clubs[idx].location,
    image: imageUrl,
    url: req.body.url !== undefined ? req.body.url : clubs[idx].url,
  }

  writeDb('clubs.json', clubs)
  res.json(clubs[idx])
})

router.delete('/:id', requireAuth, (req, res) => {
  writeDb('clubs.json', readDb<any[]>('clubs.json').filter((c) => c.id !== req.params.id))
  res.json({ success: true })
})

export default router
