let btn = document.querySelector("button");

let url = "https://catfact.ninja/fact";
let url1 = "https://dog.ceo/api/breeds/image/random";

async function CatFacts() {
  try {
    let result = await axios.get(url);
    return result.data.fact;
  } catch (err) {
    console.log("Error :", err); // this error will not effect our execution
    return "Fact not availible";
  }
}

btn.addEventListener("click", async () => {
  let fact = await CatFacts(); // random fact about cats
  console.log(fact);
  let p = document.querySelector("#res");
  p.innerText = fact;
});
