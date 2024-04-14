import React from "react";

const TodoItem = ( { id , title , status , Name , completionDate , handleUpdate , handleDelete , handleEdit } ) => {

    const getDate = () => {

      const str = Date( completionDate ).toLocaleString()  ;

      const date = str.slice( 3 , 15 ) + ' at' + str.slice( 15 , 21 )  ;

      return date  ;
    }


  return (
    <div>
        <h2> { title } </h2>

        <p> Assigned To - { Name } </p>

        <button onClick={ () => handleUpdate( id , status ) } > { status ? "completed" : "pending" } </button>

        <button onClick={ () => handleEdit( id , title , Name ) } > Edit </button>

        <button onClick={ () => handleDelete( id ) } > Delete </button>

        <p> { completionDate && getDate() } </p>
    </div>
  )
}

export default React.memo(TodoItem)  ;
