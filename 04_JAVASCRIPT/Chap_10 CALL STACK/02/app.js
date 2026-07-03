// note java script is single threded that mean it can run only 1 task at a time
setTimeout(function () {
  console.log("after 2 second later ");
  console.log("Hi i am a Developer !");
}, 2000); // this 2 second time will hold by the browsers js again run after 2 second because it is single threaded not like cpp,java those are multithreaded
// it is synchronous that mean it will execute one bye one
// and asynchonous is when lots of programs runing diffrent timeline that is asynchronous
console.log("yo");
