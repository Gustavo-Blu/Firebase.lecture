import React from 'react'
import database from '../../utils/firebase'

class TodoForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt)
    {
        this.setState({ name: evt.target.value })
    }

    handleSubmit(evt)
    {
        evt.preventDefault();
        const todoRef = database.ref('Todos')
        todoRef.push({ ...this.state, isComplete: false })

        this.setState({ name: '' })
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label htmlFor="name">Name</label>
                <input type="string" name="name" value={this.state.name} onChange={this.handleChange} />
                
                <button type="submit">add pokemon</button>
            </form>
        )
    }
}

export default TodoForm
