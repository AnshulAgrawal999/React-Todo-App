import { useState } from "react";

const TodoInput = ( {handleAdd} ) => {

  const handleClick = () => {
    handleAdd( todo )  ;

    setTodo( { title : "" , Name : "" } )  ;
  } 

  const handleTitle = (e) => {
    setTodo( { title : e.target.value , Name : todo.Name } )  ;
  }

  const handleName = (e) => {
    setTodo( { title : todo.title , Name : e.target.value } )  ;
  }

  const [ todo , setTodo ] = useState( { title : "" , Name : "" } )  ;

  return (
    <div>
      <input onChange={ handleTitle } type='text' id='title' placeholder='title' value={todo.title} /> 
      <input onChange={ handleName } type='text' id='name' placeholder='name' value={todo.Name} /> 
      <button onClick={handleClick} > Add Todo </button>
    </div>
  )
}

export default TodoInput  ;
