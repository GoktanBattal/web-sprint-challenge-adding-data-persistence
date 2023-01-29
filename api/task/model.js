// build your `Task` model here
const db = require('../../data/dbConfig');

async function list() {
  let tasks = await db('tasks as t').leftJoin('projects as p', 't.project_id', 'p.project_id').select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description');
  tasks = tasks.map((item) => ({ ...item, task_completed: item.task_completed ? true : false }));
  return tasks;
}

async function create(task) {
  const id = await db('tasks').insert(task);
  const item = await db('tasks').where('task_id', id);
  const result = item.map((item) => ({ ...item, task_completed: item.task_completed ? true : false }));
  return result[0];
}

async function findById(id) {
  const row = await db('tasks').where('task_id', id);
  return row;
}

module.exports = {
  list,
  create,
  findById
};
