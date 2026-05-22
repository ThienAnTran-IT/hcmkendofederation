import { Router } from 'express'
import { readDb, writeDb } from '../services/fileDb'
import { requireAuth } from '../middleware/auth'
import { config } from '../config'

const router = Router()

router.get('/', requireAuth, (_req, res) => {
  const admins = readDb<string[]>('admins.json')
  const list = admins.includes(config.seedAdminEmail)
    ? admins
    : [config.seedAdminEmail, ...admins]
  res.json(list)
})

router.post('/', requireAuth, (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email required' })

  const admins = readDb<string[]>('admins.json')
  if (admins.includes(email) || email === config.seedAdminEmail) {
    return res.status(409).json({ error: 'Already an admin' })
  }

  admins.push(email)
  writeDb('admins.json', admins)
  res.status(201).json({ email })
})

router.delete('/:email', requireAuth, (req, res) => {
  const email = decodeURIComponent(req.params.email)

  if (email === config.seedAdminEmail) {
    return res.status(403).json({ error: 'Cannot remove seed admin' })
  }

  const admins = readDb<string[]>('admins.json')
  writeDb('admins.json', admins.filter((e) => e !== email))
  res.json({ success: true })
})

export default router
