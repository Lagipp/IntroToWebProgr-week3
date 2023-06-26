import "./styles.css";

const tbody = document.querySelector("tbody");
// const municipalities = document.querySelector(".municipalitiesList");
// const populations = document.querySelector(".populationsList");

/*         <div class="municipalitiesList"></td>
        <div class="populationsList"></td> */

// The municipalities can be found in dataset.dimension.Alue.category.label
// The values can be found in         dataset.value

const url =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const x = data.dataset;
  });

// async function populateTable() {
//   const url =
//     "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
//   const res = await fetch(url);
//   const JsonObj = await res.json();

// console.log(JsonObj.dataset.dimension.Alue.category.label);
// console.log(JsonObj.dataset.value);

//JsonObj.dataset.forEach((el) => console.log(el));
// for (let el in JsonObj.dataset)
// {
//   console.log(el.dimension.Alue.category.label)
// }

// for (let data in JsonObj) {
//   for (let elem in data.dataset.dimension.Alue.category.label) {
//     console.log(typeof elem);
//     // console.log();
//   }
// }

// Object.keys(JsonObj).forEach((el) => {
//   console.log(typeof el);
//   console.log(JsonObj[el].dimension.Alue.category.label);
// });

// fetch("https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff")
//   .then((res = res.json()))
//   .then((data) => (JsonObj = data));

// console.log(JsonObj.dataset.dimension.Alue.category.label);
// console.log(JsonObj.dataset.value)

//JsonObj.forEach((el) => {
// Object.keys(JsonObj).forEach((el) => {
//   let newTr = document.createElement("tr");
//   let newMunicipality = document.createElement("td");
//   let newPopulation = document.createElement("td");

//   //console.log(JsonObj[el]);

//   newMunicipality.innerText = JsonObj[el].dimension.Alue.category.label;
//   newPopulation.innerHTML = JsonObj[el].value;

//   newTr.appendChild(newMunicipality);
//   newTr.appendChild(newPopulation);

//   tbody.appendChild(newTr);
// });
// }

// populateTable();
