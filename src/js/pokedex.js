const pokemonImage = document.querySelector(".pokemon__image");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonName = document.querySelector(".pokemon__name");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");



//CONECTAR E CAPTURAR AS INFORMAÇOES DA POKEAIP

const fetchpokemon = async(pokemon) => {
    
    const APIResponse = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {



        const data = await APIResponse.json();
    
                return data;
    
        
    }

    
};

const renderpokemon = async(pokemon) => {

    pokemonName.textContent = "loading...";
    pokemonNumber.textContent = "😑";

    
    const data = await fetchpokemon(pokemon);
    
    console.log(data)

    if (data) {
        //caso tudo de certo  

        pokemonName.textContent = data.name;
        pokemonNumber.textContent = data.id;
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
    



    } else {

        //caso tudo de errado
        pokemonImage.src = 'https://i.pinimg.com/originals/80/e1/8d/80e18df0ed0ad872ac1a003d543d9613.gif'
        pokemonNumber.textContent = "";
        pokemonImage.Style.width = "35%"
        pokemonName.textContent = "Not found :("


        
    }
        



};

form.addEventListener('submit', (event) => {

  event.preventDefault();


  renderpokemon(input.value.toLowerCase());

    

});

renderpokemon(1)

