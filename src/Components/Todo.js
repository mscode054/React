import React ,{useState,useEffect} from 'react'


const Todo=({texts,todo,todos,setTodo})=>{
    const deletehandler=()=>{
        setTodo(todo.filter((el) => el.id!== todos.id ))
    }
    const complete=()=>{
        setTodo(todo.map((item)=> {
            if(item.id===todos.id){
                return {
                    ...item , completed: !item.completed,
                };
                
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todos.completed ? 'on' : 'off'}`}>{texts}</li>
            <button onClick={complete} className='tick-btn'><i className='fas fa-check'></i></button>
            <button onClick={deletehandler} className='remove-btn'><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;