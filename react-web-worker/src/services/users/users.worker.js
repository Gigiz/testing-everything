import faker from 'faker';

self.addEventListener('message', (event) => {
  const { data: { action } } = event;

  switch (action) {
    case 'fetchUsers':
      const users = [];
      for (let i = 0; i < 1000; i++) {
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
    default:
      self.postMessage({ action: 'noAction', payload: { error: 'No action provided' } });
      break;
  }
});