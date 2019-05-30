
console.log('Start execution');

const startTime = new Date();

let count = 0;
for(let i=0; i < 10000000000; i++) {
  count += i;
}

const endTime = new Date();

console.log(`Finish in ${endTime - startTime} ms. Res => ${count}`);