import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { readDb, writeDb } from '../services/fileDb'
import { requireAuth } from '../middleware/auth'
import { galleryUpload } from '../middleware/upload'

const GALLERY_DIR = path.join(__dirname, '../../uploads/gallery')

const router = Router()

router.get('/', (_req, res) => {
  res.json(readDb<any[]>('gallery.json'))
})

router.post('/upload', requireAuth, galleryUpload.single('image') as any, (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })

  const gallery = readDb<any[]>('gallery.json')
  const item = {
    filename: req.file.filename,
    url: `/uploads/gallery/${req.file.filename}`,
  }
  gallery.push(item)
  writeDb('gallery.json', gallery)
  res.status(201).json(item)
})

router.delete('/:filename', requireAuth, (req, res) => {
  const filename = req.params.filename
  const gallery = readDb<any[]>('gallery.json')
  const item = gallery.find((g) => g.filename === filename)

  if (item) {
    const filePath = path.join(GALLERY_DIR, filename)
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
  }

  writeDb('gallery.json', gallery.filter((g) => g.filename !== filename))
  res.json({ success: true })
})

router.put('/reorder', requireAuth, (req, res) => {
  const { order } = req.body as { order: string[] }
  const gallery = readDb<any[]>('gallery.json')
  const reordered = order.map((filename) => gallery.find((g) => g.filename === filename)).filter(Boolean)
  writeDb('gallery.json', reordered)
  res.json(reordered)
})

export default router
