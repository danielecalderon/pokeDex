<script type="module"/>
  import { Toast } from 'bootstrap.esm.min.js'



function fetchAllPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
     .then(response => response.json())
     .then(function(allpokemon){
     allpokemon.results.forEach(function(pokemon){
       fetchPokemonData(pokemon); 
     })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url 
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
      renderPokemon(pokeData)
    })
}

function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") 
    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name
    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
    let pokeTypes = document.createElement('ul') 

    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    createTypes(pokeData.types, pokeTypes) 
    
    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
    
    allPokemonContainer.appendChild(pokeContainer);       
                                                              
}
    
function createTypes(types, ul){
    types.forEach(function(type){
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi)
    })
  }



fetchAllPokemon()



