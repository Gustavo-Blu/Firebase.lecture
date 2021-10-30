import database from '../../utils/firebase'


//action constants
const ALLPOKEMON = 'ALLPOKEMON';

//action creators
const _setPokemon = (pokemon) => (
{
    type: ALLPOKEMON,
    pokemon
})

//thunk functions
export const fetchPokemon = () =>
{
    return async dispatch =>
    {
        const pokeRef = database.ref("Pokemon");
        pokeRef.on('value', (snapshot) =>
        {
            const pokemon = snapshot.val();
            console.log(pokemon)
            let newArr = [];
            for (let key in pokemon)
            {
                newArr.push({ ...pokemon[key], id: key })
            }
            dispatch(_setPokemon(newArr))
        })
    }
}

//reducer
export default function(state = [], action)
{
    switch (action.type)
    {
        case ALLPOKEMON:
            return action.pokemon;
        default:
            return state
    }
}
