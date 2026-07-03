function LoopFun() {
  let id = setInterval(() => {
    console.log("Hello worlds");
  }, 2000);
  setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval runned ...");
  }, 11000);
}

LoopFun();
