async function fetchData(url) {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon",);

        if (response.ok == true) {
            const response_data = await response.json();
            return response_data
        } else {
            throw new Error(`HTTP-virhe! Tilakoodi: ${response.status}`);
        }
    } catch (error) {
    console.log(`Virhe datan hakemisessa ${error}`);
    }
    
    
}

async function createPokemonView() {
    const pokemonData = await fetchData();
    const pokemonDiv = document.getElementById('poke-content');

    for (let pokemon of pokemonData.results) {
        let pokemonText = document.createElement('p');
        pokemonText.textContent = pokemon.name;
        pokemonDiv.appendChild(pokemonText);

        pokemonText.addEventListener("click", (event) => searchVariants(event, pokemon.url));

    }
}

async function searchVariants(evt,url) {
    const pokemonData = await fetchData(url);
    console.log(pokemonData);
}

createPokemonView();

