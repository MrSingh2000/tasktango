// checks if the user is owner of task
function isOwner(task, user) {
  return user.equals(task.owner);
}

// checks if the user is in collaboration list
function isCollab(task, user) {
  console.log("users: ", user);
  if (user._id) return task.collab.includes(user._id);

  return task.collab.includes(user || user._id);
}

module.exports = { isOwner, isCollab };
