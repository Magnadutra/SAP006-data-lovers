import { filterSelected, sortOrder, calcFilter } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const dataBase = data.results;
const selectGender = document.querySelector('.filter-gender')
const filterSelectSpecies = document.querySelector('.filter-species');
const filterSelectStatus = document.querySelector('.filter-status');
const filterSelectOrder = document.querySelector('.filter-order');

selectGender.addEventListener('change', filterGender);
filterSelectSpecies.addEventListener('change', filterSpecies);
filterSelectStatus.addEventListener('change', filterStatus);
filterSelectOrder.addEventListener('change', filterOrder);

function printCharacters(personagem) {
  const mainPersonagens = document.getElementById("personagens")

  const cards = personagem.map((info) => (`
    <div class="organiza-cards">
    <div class="formatacao-card">

      <div class="card-frente">
        <img src="${info.image}">

        <p class="title">${info.name}</p>
      </div>

      <div class="card-verso">
        <ul>
          <li>Gênero: ${info.gender}</li>
          <li>Espécie: ${info.species}</li>
          <li>Status: ${info.status}</li>
          <li>Status: ${info.location.name}</li>
        </ul>
      </div>

    </div>
  </div>
  `)).join('')

  mainPersonagens.innerHTML = cards
}
printCharacters(dataBase)


function resultCalc(dataBase, selectedFilter) {
  const result = calcFilter(dataBase, selectedFilter)
  document.getElementById("calculation").innerHTML = "Existem " + selectedFilter.length + " personagens deste filtro e representam " + result + "% do total de personagens"
}

function filterGender() {
  const valueGenderSelected = selectGender.value
  const selecteddGender = filterSelected(dataBase, valueGenderSelected, 'gender')
  printCharacters(selecteddGender)
  resultCalc(dataBase, selecteddGender)
}

function filterSpecies() {
  const valueSpeciesSelected = filterSelectSpecies.value
  const selectedSpecies = filterSelected(dataBase, valueSpeciesSelected, 'species')
  printCharacters(selectedSpecies)
  resultCalc(dataBase, selectedSpecies)
}

function filterStatus() {
  const valueStatusSelected = filterSelectStatus.value
  const selectedStatus = filterSelected(dataBase, valueStatusSelected, 'status')
  printCharacters(selectedStatus)
  resultCalc(dataBase, selectedStatus)
}

function filterOrder() {
  const valueOrderSelected = filterSelectOrder.value
  const selectedOrder = sortOrder(dataBase, valueOrderSelected)
  printCharacters(selectedOrder)
  resultCalc(dataBase, selectedOrder)

}
