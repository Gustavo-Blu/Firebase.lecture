import React from 'react'
import database from '../../utils/firebase'

class pokeForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: '',
            hp: 0,
            attack: 0,
            defense: 0,
            image: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt)
    {
        this.setState(
        {
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt)
    {
        evt.preventDefault();
        const pokeRef = database.ref('Pokemon')
        const pokemon = { ...this.state }
        pokeRef.push(pokemon)

        this.setState({ name: '', hp: 0, attack: 0, defense: 0, image: '' })
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="string" name="name" value={this.state.name} onChange={this.handleChange} />
                
                <label htmlFor="hp">Hp</label>
                <input type="number" name="hp" value={this.state.hp} onChange={this.handleChange} />
                
                <label htmlFor="attack">Attack</label>
                <input type="number" name="attack" value={this.state.attack} onChange={this.handleChange} />
                
                <label htmlFor="defense">Defense</label>
                <input type="number" name="defense" value={this.state.defense} onChange={this.handleChange} />
                
                <label htmlFor="image">Artwork</label>
                <input type="string" name="image" value={this.state.image} onChange={this.handleChange} />
                
                <button type="submit">add pokemon</button>
            </form>
        )
    }
}

export default pokeForm
