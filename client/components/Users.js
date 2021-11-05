import React from 'react';
import { firestore } from '../../utils/firebase'
import { collection, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import CreateUsers from './CreateUsers'

class Users extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            users: []
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    async componentDidMount()
    {
        const userRef = collection(firestore, 'users')
        const data = await getDocs(userRef)
        this.setState({ users: data.docs.map(doc => ({ ...doc.data(), id: doc.id })) })
    }

    async handleUpdate(user)
    {
        const userRef = doc(firestore, 'users', user.id)
        await updateDoc(userRef, { age: user.age + 1 })
    }

    async handleDelete(user)
    {
        const userRef = doc(firestore, 'users', user.id)
        await deleteDoc(userRef)
    }

    render()
    {
        const { users } = this.state
        console.log(users)
        return (
            <div className='main'>
                <CreateUsers />
                {users.map(user =>
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h3>{user.age}</h3>
                    <button onClick={() => this.handleUpdate(user)}>increase age</button>
                    <button onClick={() => this.handleDelete(user)}>delete</button>
                </div>
                )}
            </div>
        );
    }
}

export default Users
