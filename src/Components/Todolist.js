import React  from 'react'
import Todo from './Todo'


const Todolist=({todo,setTodo,filteredtodo})=>{
    return (
        <>
            <div className="todo-cont">
                <ul className='todolist'>
                    {filteredtodo.map((todos)=>(
                        <Todo todo={todo} todos={todos} setTodo={setTodo} texts={todos.texts} key={todos.id} />
                    ))}
                </ul>
            </div>
        </>
    );
        
}

export default Todolist;