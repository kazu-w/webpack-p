import "../css/style.scss";
import "./reactApp.jsx";

import Vue from "vue";
import VueApp from "./vueApp.vue";
new Vue({
  el: "#vue-root",
  render: (h) => {
    return h(VueApp);
  },
  mounted() {
    console.log("!!!");
  },
});

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

if (searchBtn) {
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
}

import m1 from "./modules/m1";

import axios from "axios";
function getData2() {
  const url =
    "http://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=9b4c3aba091293d4dcda5748bc6e2198";

  axios.get(url).then(function(response) {
    // handle success
    const data = response.data;
    console.log(data);

    const days = data.list;

    days.forEach((day) => {
      console.log(day.dt_txt + " " + day.weather[0].description);
    });

    console.log(data.city);
    console.log(data.list);
  });
}

async function setData() {
  const result2 = await getData2();
}

setData();

const bbb = "bbb";
console.log(bbb);
