const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const num = parseInt(input());
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log(sum);

//// 이해하기 쉽습니다. :22 :333
