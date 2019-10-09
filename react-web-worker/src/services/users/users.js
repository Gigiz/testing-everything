import faker from 'faker';

export const fetchUsers = () => {

  return new Promise((resolve, reject) => {
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

    resolve(users);
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
