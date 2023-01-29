// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');
const { validate } = require('./validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const resources = await Resource.list();
    res.status(200).json(resources);
  } catch (error) {
    next(error);
  }
});

router.post('/', validate, async (req, res, next) => {
  try {
    const data = await Resource.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
