let h1 = document.querySelector("h1");
// we can create funtions
function ColorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color changed successfully");
    }, delay);
  });
}
// Just basic ranbow color
ColorChange("voilet", 2000)
  .then(() => {
    console.log("Voilet color was completed!");
    return ColorChange("indigo", 2000); // returning promise
  })
  .then(() => {
    console.log("Indigo color was completed!");
    return ColorChange("blue", 2000);
  })
  .then(() => {
    console.log("Blue color was completed!");
    return ColorChange("green", 2000);
  })
  .then(() => {
    console.log("Green color was completed!");
    return ColorChange("yellow", 2000);
  })
  .then(() => {
    console.log("Yellow color was completed!");
    return ColorChange("orange", 2000);
  })
  .then(() => {
    console.log("Orange color was completed!");
    return ColorChange("red", 2000);
  })
  .then(() => {
    console.log("Red color was completed!");
  })
  // by the way the below rejected will never run because the avobe code doesnt have any errors
  .catch(() => {
    console.log("it rejected :");
  });
