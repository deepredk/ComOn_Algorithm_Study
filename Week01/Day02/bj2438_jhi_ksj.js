// 한글 입력 잘 받게 하는 코드
process.stdin.resume();
process.stdin.setEncoding("utf8");

// input() 할 때마다 한 줄이 문자열로 입력받아짐
const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let number = parseInt(input());

// 2438 번 문제
for(let i = 0; i < number; i++) {
    let msg = "";
    for(let j = 0; j <= i; j++) {
        msg += '*';
    }
    console.log(msg);
}

/* 2439 번 문제
for(let i = 0; i < number; i++) {
    let msg = "";
    for(let j = 0; j < number - i - 1; j++) {
        msg += " ";
    }
    for(let j = 0; j <= i; j++) {
        msg += "*";
    }
    console.log(msg);
}*/