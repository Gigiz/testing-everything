(async () => {
  const { job, start, stop } = require("microjob");

  await start();

  console.log('Start execution');
  const startTime = new Date();

  const res = async (start, end) => {
    return await job(() => {
      let count = 0;
      for(let i=start; i < end; i++) {
        count += i;
      }
      return count;
    },{ ctx: { start, end } });
  }
  
  Promise.all([res(0, 3333333333), res(3333333333, 6666666666), res(6666666666, 10000000000)])
    .then(results => {
      const count = results[0] + results[1] + results[2];

      const endTime = new Date();

      console.log(`Finish in ${endTime - startTime} ms. Res => ${count}`);
        
      stop();

    });

  

})();