let id = setInterval(() => {
  console.log("Hello world!");
}, 2000);
setTimeout(() => {
  clearInterval(id);
  console.log("Clear interval!");
}, 10000);

console.log(id);
