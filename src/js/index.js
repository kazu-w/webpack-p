import "../css/style.css";

const dogs = {
  shiba: {
    name: "shiba",
    nation: "ja",
  },
  akita: {
    name: "akita",
    nation: "ja",
  },
  tosa: {
    name: "tosa",
    nation: "ja",
  },
  husky: {
    name: "husky",
    nation: "ro",
  },
};
console.log(dogs);

const filterdDogs = (nation) => {
  //return; //Object.fromEntries(
  return Object.entries(dogs).filter(([, dog]) => {
    return dog.nation === nation;
  });
  //);
};

const searchBtn = document.getElementById("search");
const selectNation = document.getElementById("selectNation");
const result = document.getElementById("result");
let nation;
let getData;

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nation = selectNation.value;
  getData = filterdDogs(nation);
  result.innerHTML = "";
  getData.forEach(([, data]) => {
    const p = document.createElement("p");
    p.innerHTML = `${data.name} ${data.nation}`;
    result.appendChild(p);
  });
});

import m1 from "./modules/m1";

m1();
