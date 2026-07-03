let JsonRes = `{"fact": "Approximately all of cats dont care about its owner's", "length": 20}`;
// console.log(JsonRes);

let validRes = JSON.parse(JsonRes);
console.log(validRes);
console.group(validRes.fact);

let obj = {
  name: "Abhi",
  marks: 70,
};
console.log(JSON.stringify(obj));
