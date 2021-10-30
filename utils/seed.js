import axios from 'axios'
import 'firebase/database'
import database from './firebase'

const getPokemon = async() =>
{
    try
    {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        setPokemon(data)

    }
    catch (err)
    {
        console.error(err)
    }
}

const setPokemon = async(poke) =>
{
    const pokeRef = database.ref("Pokemon");
    pokeRef.on('value', (snapshot) =>
    {
        for (let i = 0; i < poke.length; i++)
        {
            let elem = poke[i];
            let pokemon = {
                hp: elem.stats[0].base_stat,
                attack: elem.stats[1].base_stat,
                defense: elem.stats[2].base_stat,
                ['special-attack']: elem.stats[3].base_stat,
                ['special-defense']: elem.stats[4].base_stat,
                speed: elem.stats[5].base_stat,
                name: elem.name,
                order: elem.id,
                image: elem.sprites.other.['official-artwork'].front_default
            }
            pokeRef.push(pokemon)
        }
    })
}

export default getPokemon
