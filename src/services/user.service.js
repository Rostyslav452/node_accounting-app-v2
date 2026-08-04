const users = [];

const getAll = () => {
  return [...users];
};

const getById = (id) => {
  const user = users.find((element) => element.id === id);

  if (!user) {
    const error = new Error('User not found');

    error.statusCode = 400;
    throw error;
  }

  return user;
};

const create = (name) => {
  const id = Math.ceil(Math.random() * 999999999999);
  const user = { id, name };

  users.push(user);

  return user;
};

const update = (id, data) => {
  const user = getById(id);

  Object.assign(user, data);

  return user;
};

const remove = (id) => {
  getById(id);

  const index = users.findIndex((element) => element.id === id);

  if (index !== -1) {
    users.splice(index, 1);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  users,
};
