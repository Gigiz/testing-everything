import faker from 'faker';

self.addEventListener('message', (message) => {
  const { data: { action } } = message;

  switch (action) {
    case 'fetchUsers':
      const users = [];
      for (let i = 0; i < 20000; i++) {
        const user = {
          id: faker.random.uuid(),
          name: faker.name.findName(),
          registrationDate: faker.date.past(),
          email: faker.internet.email(),
          commentsNumber: faker.random.number(200),
          profilePicture: faker.image.avatar(),
          profileDescription: faker.random.words(30),

        };
        users.push(user);
      }
      self.postMessage({ action: 'fetchedUsers', payload: users });
      break;
    case 'sortUsersByCommentsNumberAscending':
      const { data: { payload: usersToSort } } = message;
      for (let i = 0; i < usersToSort.length - 1; i++) {
        for (let j = i + 1; j < usersToSort.length; j++) {
          if (usersToSort[i].commentsNumber > usersToSort[j].commentsNumber) {
            const t = usersToSort[i];
            usersToSort[i] = usersToSort[j];
            usersToSort[j] = t;
          }
        }
      }
      self.postMessage({ action: 'sortedUsersAcending', payload: usersToSort });
      break;
    default:
      self.postMessage({ action: 'noAction', payload: { error: 'No action provided' } });
      break;
  }
});