import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(__dirname, '../.env') })

export const config = {
  port: parseInt(process.env.PORT || '3001'),
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  sessionSecret: process.env.SESSION_SECRET || 'dev-secret-change-me',
  seedAdminEmail: process.env.SEED_ADMIN_EMAIL || '',
  nodeEnv: process.env.NODE_ENV || 'development',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  serverUrl: process.env.SERVER_URL || 'http://localhost:3001',
}
