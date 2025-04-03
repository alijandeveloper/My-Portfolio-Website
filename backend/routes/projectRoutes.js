const express = require('express');
const router = express.Router();
const {
  getProjects,
  getFeaturedProjects,
  getProject,
  createProject
} = require('../controllers/projectController');

router.route('/')
  .get(getProjects)
  .post(createProject);

router.route('/featured')
  .get(getFeaturedProjects);

router.route('/:id')
  .get(getProject);

module.exports = router;