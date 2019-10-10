const faker = require('faker');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

function createUsers() {
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
  return users;
}

let usersArray = [];

if (isMainThread) {
  const threadCount = 3;
  const threads = new Set();

  console.log('Start execution');
  const startTime = new Date();

  console.log(`Running with ${threadCount} threads...`);
  for (let i = 0; i < threadCount; i++) {
    // threads.add(new Worker(__filename, { workerData: { start: minMax[i], end: minMax[i+1] }}));
    threads.add(new Worker(__filename, { workerData: { } }));
  }
  for (let worker of threads) {
    worker.on('error', (err) => { throw err; });
    worker.on('exit', () => {
      threads.delete(worker);
      console.log(`Thread exiting, ${threads.size} running...`);
      if (threads.size === 0) {
        const endTime = new Date();
        console.log(`Finish in ${endTime - startTime} ms. ${usersArray.length} users created`);
      }
    })
    worker.on('message', (msg) => {
      usersArray = usersArray.concat(msg);
    });
  }
} else {
  // const count = bigsum(workerData.start, workerData.end);
  const users = createUsers();
  parentPort.postMessage(users);
}