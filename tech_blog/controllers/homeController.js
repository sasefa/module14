const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  const posts = await db.Post.findAll({ include: ['user'] });
  res.render('home', { posts });
});

module.exports = router;
