import React from 'react'
import { connect } from 'react-redux'
import { fetchPokemon } from '../store/allPokemon'
import 'firebase/database'
import database from '../../utils/firebase'

class Homepage extends React.Component
{
    componentDidMount()
    {
        this.props.getPokemon()
        // const pokeRef = database.ref("Pokemon");
        // pokeRef.on('value', (snapshot) =>
        // {
        //     console.log(snapshot.val())
        // })
    }

    render()
    {
        return (
            <div className='main'>
                hello world!
            </div>
        )
    }
}

const mapDispatch = (dispatch) => (
{
    getPokemon: () => dispatch(fetchPokemon())
})

export default connect(null, mapDispatch)(Homepage)
