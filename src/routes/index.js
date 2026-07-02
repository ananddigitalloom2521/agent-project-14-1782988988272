const express = require('express');
const router = express.Router();
const models = require('../models/index');
router.get('/', async (req, res) => {
  const page = models.getPage();
  res.send(`<!DOCTYPE html><html><head><title>${page.title}</title></head><body><h1>${page.content}</h1></body></html>`);
});
module.exports = router;