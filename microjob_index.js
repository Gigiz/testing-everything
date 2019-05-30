(async () => {
  const { job, start, stop } = require("microjob");

  console.log('Start execution');

  const startTime = new Date();

  try {
    // start the worker pool
    await start();

    // this function will be executed in another thread
    const res1 = await job(() => {
      let count = 0;
      for(let i=0; i < 333333; i++) {
        count += i;
      }

      return count;
    });

    const res2 = await job(() => {
      let count = 0;
      for(let i=333333; i < 666666; i++) {
        count += i;
      }

      return count;
    });

    const res3 = await job(() => {
      let count = 0;
      for(let i=666666; i < 1000000; i++) {
        count += i;
      }

      return count;
    });

    const count = res1 + res2 + res3;

    const endTime = new Date();

    console.log(`Finish in ${endTime - startTime} ms. Res => ${count}`);
    
  } catch (err) {
    console.error(err);
  } finally {
    // shutdown worker pool
    await stop();
  }
})();