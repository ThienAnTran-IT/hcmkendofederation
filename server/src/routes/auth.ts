import { Router } from 'express'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { config } from '../config'
import { readDb } from '../services/fileDb'

export interface AdminUser {
  email: string
  name: string
  picture?: string
}

export function configurePassport() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: config.googleClientId,
        clientSecret: config.googleClientSecret,
        callbackURL: `${config.serverUrl}/api/auth/google/callback`,
      },
      (_accessToken, _refreshToken, profile, done) => {
        const email = profile.emails?.[0]?.value
        if (!email) return done(null, false)

        const admins = readDb<string[]>('admins.json')
        if (email === config.seedAdminEmail || admins.includes(email)) {
          return done(null, {
            email,
            name: profile.displayName,
            picture: profile.photos?.[0]?.value,
          } as AdminUser)
        }
        return done(null, false)
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    done(null, user as AdminUser)
  })
}

const router = Router()

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/admin/login?error=unauthorized' }),
  (_req, res) => {
    res.redirect('http://localhost:3000/admin')
  }
)

router.post('/logout', (req, res) => {
  req.logout(() => {
    res.json({ success: true })
  })
})

router.get('/me', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Not authenticated' })
  }
  res.json(req.user)
})

export default router
