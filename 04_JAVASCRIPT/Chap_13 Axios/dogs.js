let btn = document.querySelector("button");
let url1 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
  let link = await getImg();
  let img = document.querySelector("#res");
  img.setAttribute("src", link);
});

async function getImg() {
  try {
    let result = await axios.get(url1);
    return result.data.message;
  } catch (err) {
    console.log("Error :", err); // this error will not effect our execution
    return "Image not availible";
  }
}
