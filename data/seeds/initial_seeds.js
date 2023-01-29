const projects = [
    {project_name:"Helping your wife", project_description:'Extra help for cooking and cleaning', project_completed: false},
    {project_name:"Shopping", project_description:'Get all you need from the market', project_completed: true},
];

const resources = [
    {resource_name:"vacuum cleaner", resource_description:null},
    {resource_name:"dish soap", resource_description:null},
    {resource_name:"car", resource_description:null}
];

const tasks = [
    { task_description: 'clean bathroom', task_notes: 'use soap as much as you need', task_completed: false, project_id: 1 },
    { task_description: 'cook for dinner', task_notes: 'make your wife`s favorite dish and suprise her', task_completed: false, project_id: 1 },
    { task_description: 'fill the tank with gasoline', task_notes: 'check the garage', task_completed: false, project_id: 2 },
    { task_description: 'withdraw extra cash', task_notes: 'at least a 100 bill', task_completed: false, project_id: 2 },
];

const project_resources = [
    { resource_id: 1, project_id: 1 },
    { resource_id: 2, project_id: 1 },
    { resource_id: 3, project_id: 2 },
];

exports.seed = async function(knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
};