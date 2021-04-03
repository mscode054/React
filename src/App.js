import React ,{useState,useEffect} from 'react'
import Form from './Components/Form'
import Todolist from "./Components/Todolist";

function App(){
  const [text,setText]= useState('');
  const [todo,setTodo]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredtodo,setFilteredtodo]=useState([]);

  useEffect(() => {
    getLocaltodo();
  }, [])

  useEffect(() => {
    filterhandle();
    saveLocaltodo();
  }, [todo,status])

  const filterhandle=()=>{       
    switch(status) {
      case "completed":
        setFilteredtodo(todo.filter((todos)=> todos.completed ===true ));
        break;
      case "uncompleted":
        setFilteredtodo(todo.filter((todos)=> todos.completed ===false ));
        break;
      default:
        setFilteredtodo(todo);
        break;
    }
  }

  const saveLocaltodo=()=>{
    localStorage.setItem("todo", JSON.stringify(todo));
  }
  const getLocaltodo=()=>{
    if(localStorage.getItem("todo")===null){
      localStorage.setItem("todo", JSON.stringify([]));
    } else{
      let todolocal= JSON.parse(localStorage.getItem("todo"));
      setTodo(todolocal);
    }
  }

  return (
    <>
      <header>
        <h1>Your ToDo List App</h1>
        <Form text={text} todo={todo} setTodo={setTodo} setText={setText} setStatus={setStatus} />
        <Todolist filteredtodo={filteredtodo} setTodo={setTodo} todo={todo} />
      </header>
    </>
  );
}

export default App;
