// build your `Project` model here
const db = require('../../data/dbConfig');

async function list() {
  const items = await db('projects');
  const result = items.map((item) => ({ ...item, project_completed: item.project_completed ? true : false }));
  return result;
}

async function create(project) {
  const id = await db('projects').insert(project);
  const item = await db('projects').where('project_id', id);
  const [result] = item.map((item) => ({ ...item, project_completed: item.project_completed ? true : false }));
  return result;
}

async function findById(id) {
  const row = await db('projects').where('project_id', id);
  return row;
}

module.exports = {
  list,
  create,
  findById
};
