import "./styles.css";

const tbody = document.querySelector("tbody");

// The municipalities can be found in     dataset.dimension.Alue.category.label
// The values can be found in             dataset.value

const url =
  "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const municipalities = Object.values(
      data.dataset.dimension.Alue.category.label
    );
    const populations = Object.values(data.dataset.value);

    let i = 0;

    while (municipalities[i] !== undefined) {
      let newTr = document.createElement("tr");
      let newMunicipality = document.createElement("td");
      let newPopulation = document.createElement("td");

      newMunicipality.innerText = municipalities[i];
      newPopulation.innerHTML = populations[i];

      newTr.appendChild(newMunicipality);
      newTr.appendChild(newPopulation);

      tbody.appendChild(newTr);
      i++;
    }
  });
