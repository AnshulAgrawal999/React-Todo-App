import { useState , useEffect } from 'react'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import axios from 'axios';


const Todo = () => {

  const [ todoList , setTodoList ] = useState( [] )  ;

  const [ pageStatus , setPageStatus ] = useState( 1 )  ;

  const [ page , setPage ]  = useState( 0 )  ;

  const getData = async () => {

    try{

      let res = await axios({
        method: 'get' ,
        baseURL: 'http://localhost:3000' ,
        url: `/todos?_start=${page*6}&_limit=6`
      });
  
      console.log( res )  ;

      setTodoList( res.data )  ;

    }catch( err )
    {
      console.log( err )  ;
    }
  }

  useEffect( () => {
    getData()  ;
  } , [] )  ;

  const handlePageStatus = ( e ) => {

    setPageStatus( e.target.value )  ;

    console.log( 'Page Status-' , e.target.value )  ;
  }

  const checkPageStatus = ( el ) => {
    
    if( pageStatus == 1 || el.status + '' === pageStatus )
    {
      return true  ;
    } 

    return false  ;
  }

  const handleAdd = async ( { title , Name } ) => {

    const newTodo = 
    { 
        title ,
        status : false ,
        Name ,
        completionDate : ''
    }  ;

    try{
      let res = await axios({
        method: 'post' ,
        baseURL: 'http://localhost:3000' ,
        url: '/todos' ,
        data : newTodo ,
        headers : {
          "Content-Type" : "application/json"
        }
      });

      getData()  ; 

    }catch( err )
    {
      console.log( err )  ;
    }
  } 

  const handleUpdate = async ( id , status ) => {

    status = !status  ;

    const updatedTodo = { status }  ;
    
    status ?  updatedTodo.completionDate = Date.now() : updatedTodo.completionDate = ''  ;

    console.log( id , status  )  ;

    try{
      let res = await axios({
        method: 'patch' ,
        baseURL: 'http://localhost:3000' ,
        url: `/todos/${id}` ,
        data : updatedTodo ,
        headers : {
          "Content-Type" : "application/json"
        }
      });

      getData()  ; 

    }catch( err )
    {
      console.log( err )  ;
    }
  }

  const handleEdit = async ( id , title , Name ) => {
    console.log( id , title , Name )  ;
  }

  const handleDelete = async ( id ) => {
    console.log( id )  ;

    try{
      let res = await axios({
        method: 'delete' ,
        baseURL: 'http://localhost:3000' ,
        url: `/todos/${id}` 
      });

      getData()  ; 

    }catch( err )
    {
      console.log( err )  ;
    }
  }

  return (
    <div style={ { textAlign : 'center' , margin : 'auto' } }  >

      <h1> React Todo App </h1>

      <select name='status' id='status' onChange={handlePageStatus} >

          <option value={1} > Select Status </option>

          <option value={true} > completed </option>

          <option value={false} > pending </option>

      </select>
      
      <TodoInput handleAdd={handleAdd} />  

      {
        todoList.filter( checkPageStatus ).map( el => <TodoItem { ...el } key={el.id} handleUpdate={handleUpdate} handleDelete={handleDelete} handleEdit={handleEdit}/> )  
      }



    </div>
  )
}

export default Todo  ;
