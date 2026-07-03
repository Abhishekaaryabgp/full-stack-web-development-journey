let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((response) => {
//     return response.json(); // .json will funtion our data will be readable
//   })

//   .then((data) => {
//     console.log("Data 1:", data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data1) => {
//     console.log("Data 2:", data1.fact);
//   })

//   .catch((err) => {
//     console.log("Error => ", err);
//   });

//  Now assync and await funtion call

async function RandomFact() {
  try {
    let result = await fetch(url); // it will wait then after it will fetch the result
    let data = await result.json();
    console.log(data);

    let result2 = await fetch(url); // it will wait then after it will fetch the result
    let data1 = await result2.json();
    console.log(data1);

    let result3 = await fetch(url); // it will wait then after it will fetch the result
    let data2 = await result3.json();
    console.log(data2);
  } catch (err) {
    console.log("Error :", err); // this error will not effect our execution
  }
  console.log("bye"); // this bye will successfuly print without any issues
}
// if our url is wrong then it will give error so to avoid errors we uses try catch
// the avobe will be best readable format for our api calls
