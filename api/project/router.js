// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const { validate } = require('./validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.list();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
});

router.post('/', validate, async (req, res, next) => {
  try {
    const data = await Project.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
