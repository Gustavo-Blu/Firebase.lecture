import React from 'react';
import database from '../../utils/firebase'
import getPokemon from '../../utils/seed';
import PokeForm from './PokeForm'
// import 'firebase/database';
// import database from '../../utils/firebase';

class Homepage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            allPokemon: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount()
    {
        const pokeRef = database.ref("Pokemon");
        pokeRef.on('value', (snapshot) =>
        {
            const pokemon = snapshot.val();
            let newArr = [];
            for (let key in pokemon)
            {
                newArr.push({ ...pokemon[key], id: key })
            }
            this.setState({ allPokemon: newArr })
        })
    }

    handleClick(evt)
    {
        evt.preventDefault()
        getPokemon(this.state.allPokemon.length === 0)
    }

    handleDelete(evt, id)
    {
        evt.preventDefault()
        const pokeRef = database.ref('Pokemon').child(id)
        pokeRef.remove();
    }

    render()
    {
        const { allPokemon } = this.state
        console.log(this.state.allPokemon);
        return (
            <div className='main'>
                <button onClick={this.handleClick}>add a pokemon</button>
                <PokeForm />
                <div id="allPokemon">
                    {
                        allPokemon.map(elem =>
                        {
                            return (
                                <div key={elem.id} className="pokemon">
                                    <div>{elem.name}</div>
                                    <img className="pokeImage" src={elem.image} />
                                    <div>HP: {elem.hp}</div>
                                    <div>ATTACK: {elem.attack}</div>
                                    <div>DEFENSE: {elem.defense}</div>
                                    <button className="deleteButton" onClick={(evt) => this.handleDelete(evt, elem.id)}>X</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Homepage
