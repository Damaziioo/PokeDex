
function convetPokemonToHtmlLi(pokemon) {
    return`
    <li class="pokemon" >
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types"> 
                <li class="type">grass</li>
                <li class="type">grass</li>
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
        </div>
    </li>`
    
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons()
.then((pokemons)=>{pokemonList.innerHTML += pokemons.map(convetPokemonToHtmlLi).join('')})
.catch((error)=>console.error(error))
