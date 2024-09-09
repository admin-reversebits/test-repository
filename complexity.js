// complexity.js

function exampleFunction() {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        result += i * j;
      }
    }
    return result;
  }
  