// checks if the user is owner of task
function isOwner(task, user) {
  return user.equals(task.owner);
}

// checks if the user is in collaboration list
function isCollab(task, user) {
  return task.collab.includes(user);
}

module.exports = { isOwner, isCollab };
