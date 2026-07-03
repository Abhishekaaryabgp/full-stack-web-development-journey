function SaveData(data) {
  return new Promise((resolve, reject) => {
    let InternetSpeed = Math.floor(Math.random() * 10) + 1;
    if (InternetSpeed > 4) {
      console.log(`Your Interspeed is ${InternetSpeed} Mbps`);
      resolve("Success : Data Saved!");
    } else {
      console.log(`Your Interspeed is ${InternetSpeed} Mbps`);
      reject("Failed : Data Not Saved!");
    }
  });
}

// then() method takes its own callback
SaveData("Abhi") // more compact version
  // more improved version and clean below the hten chaining
  .then((result) => {
    console.log("Data 1 saved! :");
    console.log(result);
    return SaveData("its Abhi");
  })
  .then((result) => {
    console.log("data 2 saved !");
    console.log(result);
    return SaveData("Aarya");
  })
  .then((result) => {
    console.log("data 2 saved !");
    console.log(result);
  })
  // the avoide .then is called chaining ..
  .catch((error) => {
    console.log("Promise Broken !");
    console.log(error);
  });
