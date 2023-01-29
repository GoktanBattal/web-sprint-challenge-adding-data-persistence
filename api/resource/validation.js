const Resource = require('./model');

async function validate(req, res, next) {
    const { resource_name } = req.body;
    const found = await Resource.findByName(resource_name);
    if (found) {
      next();
    } else {
      next({ status: 400, message: 'resource name required and must be unique value' });
    }
  }

  module.exports = {
    validate
  };
