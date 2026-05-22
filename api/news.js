const newsSummaries = require('../server/data/news-summaries.json')

module.exports = (_req, res) => {
  res.json(newsSummaries.filter((n) => n.status === 'Published'))
}
