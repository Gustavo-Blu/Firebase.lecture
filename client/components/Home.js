import React from 'react';
import database from '../../utils/firebase'
import { ref, onValue, update, remove } from 'firebase/database'
import TodoForm from './TodoForm'

class Homepage extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            todos: []
        }
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount()
    {
        const todoRef = ref(database, 'Todos/');
        onValue(todoRef, (snapshot) =>
        {

            const todos = snapshot.val();
            console.log(todos)
            let newArr = [];
            for (let key in todos)
            {
                newArr.push({ ...todos[key], id: key })
            }
            this.setState({ todos: newArr })
        })
    }

    handleUpdate(todo)
    {
        const todoRef = ref(database, 'Todos/' + todo.id)
        update(todoRef, { isComplete: !todo.isComplete })
    }

    handleDelete(id)
    {
        const todoRef = ref(database, 'Todos/' + id)
        remove(todoRef)
    }

    render()
    {
        const { todos } = this.state
        console.log(todos)
        return (
            <div className='main'>
                <TodoForm />
                {todos.map(todo => 
                    <div key={todo.id} className="todos">
                        <h1 className={todo.isComplete ? "completed" : ""}>{todo.name}</h1>
                        <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
                        <button onClick={() => this.handleUpdate(todo)}>Complete</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Homepage
