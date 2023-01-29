// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const { validate } = require('./validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.list();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.post('/', validate, async (req, res, next) => {
  try {
    const data = await Task.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
