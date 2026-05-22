const gallery = require('../server/data/gallery.json')

module.exports = (_req, res) => {
  res.json(gallery)
}
