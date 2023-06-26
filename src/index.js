import "./styles.css";

const tbody = document.querySelector("tbody");

// The municipalities can be found in     dataset.dimension.Alue.category.label
// The values can be found in             dataset.value

const url_1 =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";
const url_2 =
  "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065";

fetch(url_1)
  .then((res) => res.json())
  .then((data) => {
    const municipalities = Object.values(
      data.dataset.dimension.Alue.category.label
    );
    const populations = Object.values(data.dataset.value);

    let i = 0;

    while (municipalities[i] !== undefined) {
      let newTr = document.createElement("tr");
      newTr.setAttribute("id", `id${i}`);
      let newMunicipality = document.createElement("td");
      let newPopulation = document.createElement("td");

      newMunicipality.innerText = municipalities[i];
      newPopulation.innerHTML = +populations[i];

      newTr.appendChild(newMunicipality);
      newTr.appendChild(newPopulation);

      tbody.appendChild(newTr);
      i++;
    }
  });

fetch(url_2)
  .then((res) => res.json())
  .then((data) => {
    const employment = Object.values(data.dataset.value);

    let j = 0;

    while (employment[j] !== undefined) {
      let existingTr = document.getElementById(`id${j}`);
      let employmentTd = document.createElement("td");

      employmentTd.innerText = employment[j];

      let x = (+employment[j] / existingTr.children[1].innerText) * 100;

      let rounded = x.toFixed(2);

      // console.log(existingTr.lastChild.innerText);

      let employmentRateTd = document.createElement("td");
      employmentRateTd.innerText = rounded + "%";

      if (x < 25) existingTr.setAttribute("class", "lowEmployment");
      if (x > 45) existingTr.setAttribute("class", "highEmployment");

      // employmentRateValue < 25
      //   ? existingTr.setAttribute("class", "lowEmployment")
      //   : employmentRateValue > 45
      //   ? existingTr.setAttribute("class", "highEmployment")
      //   : existingTr.setAttribute("class", " ")

      existingTr.lastChild.after(employmentTd);
      existingTr.lastChild.after(employmentRateTd);
      j++;
    }
  });
