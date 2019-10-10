import UsersWorker from '@src/services/users/users.worker';

const usersWorker = new UsersWorker();

export const fetchUsers = () => {

  return new Promise((resolve, reject) => {
    usersWorker.onmessage = message => {
      const { data: { action, payload } } = message;
      if (action === 'fetchedUsers') {
        resolve(payload);
      } else {
        reject();
      }
    };
    usersWorker.postMessage({ action: 'fetchUsers' });
  });
};

export const sortUsersByCommentsNumberAscending = users => {
  return new Promise((resolve, reject) => {
    usersWorker.onmessage = message => {
      const { data: { action, payload } } = message;
      if (action === 'sortedUsersAcending') {
        resolve(payload);
      } else {
        reject();
      }
    };
    usersWorker.postMessage({ action: 'sortUsersByCommentsNumberAscending', payload: users });
  });
};

export const sortUsersByCommentsNumberDescending = users => {
  const copy = [...users];
  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = i + 1; j < copy.length; j++) {
      if (copy[i].commentsNumber < copy[j].commentsNumber) {
        const t = copy[i];
        copy[i] = copy[j];
        copy[j] = t;
      }
    }
  }
  return copy;
};

export const stopWebWorker = () => {
  usersWorker.terminate();
};
