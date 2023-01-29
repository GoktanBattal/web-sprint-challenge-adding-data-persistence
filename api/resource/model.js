// build your `Resource` model here
const db = require('../../data/dbConfig');

async function list() {
  const items = await db('resources');
  return items;
}

async function create(resource) {
  const id = await db('resources').insert(resource);
  const item = await db('resources').where('resource_id', id);
  return item[0];
}

async function findByName(name) {
  const item = await db('resources').where('resource_name', name);
  return item;
}

module.exports = {
  list,
  create,
  findByName
};
