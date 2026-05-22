import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(__dirname, '../../data')

export function readDb<T>(filename: string): T {
  const filePath = path.join(DATA_DIR, filename)
  if (!fs.existsSync(filePath)) {
    return [] as unknown as T
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(content) as T
}

export function writeDb<T>(filename: string, data: T): void {
  const filePath = path.join(DATA_DIR, filename)
  fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
}
