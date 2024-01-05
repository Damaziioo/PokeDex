
const loadMore = document.getElementById('loadMore');
const maxRecords = 12;
const limit = 5;
let offset = 0;



function loadMoreItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types"> 
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>`).join("")
    })
        .catch((error) => console.error(error))
}
loadMoreItems()
loadMore.addEventListener('click', () => {
    offset += limit
    debugger
    const manyRecord = offset + limit;

    if (manyRecord >= maxRecords) {
        const newLimit = maxRecords - offset
        loadMoreItems(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    }
    else {
        loadMoreItems(offset, limit)
    }

})
