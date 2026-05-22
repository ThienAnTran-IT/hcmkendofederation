/**
 * One-time migration script: copies static assets to server/uploads/
 * Run: yarn migrate (from server/ directory)
 */
import fs from 'fs'
import path from 'path'

const ROOT = path.join(__dirname, '../..')
const SERVER = path.join(__dirname, '..')

function copyFile(src: string, dest: string) {
  if (!fs.existsSync(src)) {
    console.warn(`  SKIP (not found): ${src}`)
    return
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)
  console.log(`  OK: ${path.relative(ROOT, src)} → ${path.relative(ROOT, dest)}`)
}

function copyDir(srcDir: string, destDir: string) {
  if (!fs.existsSync(srcDir)) {
    console.warn(`  SKIP dir (not found): ${srcDir}`)
    return
  }
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    copyFile(path.join(srcDir, file), path.join(destDir, file))
  }
}

console.log('\n=== Migrating gallery images ===')
const galleryFiles = [
  'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg',
  'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg',
  'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image14_1.png',
  'image14.svg', 'image15.svg',
]
for (const f of galleryFiles) {
  copyFile(
    path.join(ROOT, 'src/assets/images/homeGallery', f),
    path.join(SERVER, 'uploads/gallery', f)
  )
}

console.log('\n=== Migrating news images ===')
const newsFiles = [
  'news_6th_championships.jpg',
  'news_kata_training.jpg',
  'VOKCs_2025.jpg',
  'news_20250701.jpg',
  'news_20250701_2.jpg',
  'news_20250715.png',
  'VOKCsCUP2025_Backdrop.jpg',
]
for (const f of newsFiles) {
  copyFile(
    path.join(ROOT, 'src/assets/images/news', f),
    path.join(SERVER, 'uploads/news', f)
  )
}

console.log('\n=== Migrating club logos ===')
copyDir(
  path.join(ROOT, 'src/assets/images/logoOfClubs'),
  path.join(SERVER, 'uploads/clubs')
)

console.log('\n=== Migration complete ===\n')
