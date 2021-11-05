import React from 'react'
import { firestore } from '../../utils/firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'


class CreateUsers extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            name: '',
            age: 0
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

    async handleSubmit(evt)
    {
        evt.preventDefault();
        const userRef = collection(firestore, 'users')
        await addDoc(userRef, { name: this.state.name, age: Number(this.state.age) })
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add User</h1>
                <label htmlFor="name">Name</label>
                <input type="string" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Name"/>
                
                <label htmlFor="age">Age</label>
                <input type="number" name="age" value={this.state.age} onChange={this.handleChange} placeholder="Enter Age"/>
                
                <button type="submit">add User</button>
            </form>
        )
    }
}

export default CreateUsers
