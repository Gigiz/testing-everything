const faker = require('faker');

console.log('Start Users creation');

const startTime = new Date();


const users = [];
for (let i = 0; i < 60000; i++) {
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

const endTime = new Date();

console.log(`Finish in ${endTime - startTime} ms. ${users.length} users created`);