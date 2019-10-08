const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const minMax = [ 0, 3333333333, 6666666666, 10000000000 ];

let count = 0;
function bigsum(start, end) {
  let count = 0;
  for(let i=start; i < end; i++) {
    count += i;
  }
  return count;
}

if (isMainThread) {
  const threadCount = 3;
  const threads = new Set();

  console.log('Start execution');
  const startTime = new Date();

  console.log(`Running with ${threadCount} threads...`);
  for (let i = 0; i < threadCount; i++) {
    threads.add(new Worker(__filename, { workerData: { start: minMax[i], end: minMax[i+1] }}));
  }
  for (let worker of threads) {
    worker.on('error', (err) => { throw err; });
    worker.on('exit', () => {
      threads.delete(worker);
      console.log(`Thread exiting, ${threads.size} running...`);
      if (threads.size === 0) {
        const endTime = new Date();
        console.log(`Finish in ${endTime - startTime} ms. Res => ${count}`);
      }
    })
    worker.on('message', (msg) => {
      count += msg;
    });
  }
} else {
  const threadCount = bigsum(workerData.start, workerData.end);
  parentPort.postMessage(threadCount);
}