// import { filterGenderSelect, filterSpeciesSelects, filterstatus, sorOrder, calculoPorEscolha } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const dataBase = data.results; //Para trazer todos os dados do data


///FUNÇÃO DE IMPRIMIR AS INFORMAÇÕES NA TELA
const MainPersonagens = document.getElementById("personagens") 

//Função card - paramêtro personagem
function card(personagem) {
  const elementoCard = `
   <div class="organiza-cards">
    <div class="formatacao-card"> 
      <div class="card-frente">
        <img src="${personagem.image}">
        <p class="title">${personagem.name}</p>
      </div>
      
      <div class="card-verso">
        <ul>
          <li>Gênero: ${personagem.gender}</li> 
          <li>Espécie: ${personagem.species}</li>
          <li>Status: ${personagem.status}</li>
          <li>Origem: ${personagem.origin.name}</li>
        </ul>
      </div>
    </div>
  </div>
`
  return elementoCard

}

/*/só usamos array*/
/*/index é o número do array/*/
/*/Data base informações da API/*/

let todosOsCards = "" //limpar tela

for (let index = 0; index < dataBase.length; index++) { //++ somando e retornando
  const personagem = dataBase[index];
  todosOsCards += card(personagem)

}

MainPersonagens.innerHTML = todosOsCards //variavel co

// Manipular o DOM igual ao cifer

// resposividade e sort



// selectGender.addEventListener("change", gender) //pra não precisar por botão / apenas select




























// Recomendamos que utilize src / main.js para todos os códigos que tenham a ver com a exibição dos dados na tela.Com
//  isto nos referimos basicamente à interação com o DOM.Operações como criação de nós, registro de manejadores de eventos(event listeners ou event handlers) e etc.

// Esta não é a única forma de dividir seu código.Pode utilizar mais arquivos e pastas, sempre e quando a estrutura estiver clara para suas colegas.

// Neste arquivo você encontrará uma séris de imports comentados.Para carregar diferentes fontes de dados,
// você deverá "descomentar" estos imports.Cada um destes imports criará uma variável data com os dados correspondentes à fonte escolhida.   */}