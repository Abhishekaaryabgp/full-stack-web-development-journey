let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let univArr = await GetUniversity(country);
  show(univArr);
});

function show(univArr) {
  let list = document.querySelector("#list");
  list.innerText = "";

  for (col of univArr) {
    console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function GetUniversity(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    console.log("Error", error);
    return [];
  }
}
