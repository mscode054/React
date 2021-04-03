import React ,{useState,useEffect} from 'react'

const Form=({setText,setTodo,todo,text,setStatus})=>{
    const texthandler=(e)=>{
        setText(e.target.value);
    }
    const submithandler=(e)=>{
        e.preventDefault();
        setTodo([...todo, {texts: text, completed:false, id: Math.random()*1000}])
        setText('');
    }
    const statushandle=(e)=>{
        setStatus(e.target.value);
    }
    return (
        <form>
            <div className="adjust">
                <div className="adj">
                     <input value={text} onChange={texthandler} type="text" className='input'/>
                    <button onClick={submithandler} className='todo-btn' type='submit'>
                        +
                    </button>
                </div>
                <div className="select">
                    <select onChange={statushandle} name="todos" className='todos'>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
            
        </form>
    );
}
export default Form;