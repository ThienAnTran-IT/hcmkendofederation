import express from 'express'
import session from 'express-session'
import passport from 'passport'
import cors from 'cors'
import path from 'path'
import { config } from './config'
import { configurePassport } from './routes/auth'
import authRouter from './routes/auth'
import newsRouter from './routes/news'
import clubsRouter from './routes/clubs'
import contentRouter from './routes/content'
import galleryRouter from './routes/gallery'
import adminsRouter from './routes/admins'

const FileStore = require('session-file-store')(session)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: config.clientOrigin,
    credentials: true,
  })
)

const sessionsDir = path.join(__dirname, '../sessions')
app.use(
  session({
    store: new FileStore({ path: sessionsDir, ttl: 86400, retries: 0 }),
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: config.nodeEnv === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  }) as any
)

configurePassport()
app.use(passport.initialize() as any)
app.use(passport.session() as any)

app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use('/api/auth', authRouter)
app.use('/api/news', newsRouter)
app.use('/api/clubs', clubsRouter)
app.use('/api/content', contentRouter)
app.use('/api/gallery', galleryRouter)
app.use('/api/admins', adminsRouter)

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`)
})

export default app
