const Project = require('../project/model');

async function validate(req, res, next) {
  const { project_id, task_description } = req.body;

  if (!task_description || task_description === undefined) {
    next({ status: 400, message: 'task missing a description field' });
  } else if (project_id === undefined || project_id == null) {
    next({ status: 400, message: 'project id is required' });
  } else {
    const project = await Project.findById(project_id);

    if (!project || project.length === 0) {
      next({ status: 400, message: 'invalid project id' });
    }
  }

  next();
}

module.exports = {
  validate
};
