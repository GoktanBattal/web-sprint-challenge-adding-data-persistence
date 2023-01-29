function validate(req, res, next) {
  const { project_name } = req.body;
  if (project_name) {
    next();
  } else {
    next({ status: 400, message: 'project missing a name field' });
  }
}

module.exports = {
  validate
};
