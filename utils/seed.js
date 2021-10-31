import axios from 'axios'
import 'firebase/database'
import database from './firebase'

const getPokemon = async(isEmpty) =>
{
    try
    {

        if (isEmpty)
        {
            for (let i = 1; i <= 151; i++)
            {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                const pokeRef = database.ref("Pokemon");
                let pokemon = {
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default
                }
                pokeRef.push(pokemon)
            }
        }
    }
    catch (err)
    {
        console.error(err)
    }
}
export default getPokemon
