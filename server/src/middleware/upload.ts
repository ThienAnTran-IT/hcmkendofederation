import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'

function createStorage(folder: string) {
  const dest = path.join(__dirname, `../../uploads/${folder}`)
  fs.mkdirSync(dest, { recursive: true })
  return multer.diskStorage({
    destination: dest,
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname)
      cb(null, `${uuidv4()}${ext}`)
    },
  })
}

export const galleryUpload = multer({ storage: createStorage('gallery') })
export const newsUpload = multer({ storage: createStorage('news') })
export const clubsUpload = multer({ storage: createStorage('clubs') })
