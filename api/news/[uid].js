const newsDetails = require('../../server/data/news-details.json')

module.exports = (req, res) => {
  const { uid } = req.query
  const item = newsDetails.find((n) => n.uid === uid)
  if (!item) return res.status(404).json({ error: 'Not found' })
  res.json(item)
}
