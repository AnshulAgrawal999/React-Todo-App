import React from "react";

const TodoItem = ( { id , title , status , Name , completionDate , handleUpdate , handleDelete , handleEdit } ) => {
  return (
    <div>
        <h2> { title } </h2>

        <p> Assigned To - { Name } </p>

        <button onClick={ () => handleUpdate( id , status ) } > { status ? "completed" : "pending" } </button>

        <button onClick={ () => handleEdit( id , title , Name ) } > Edit </button>

        <button onClick={ () => handleDelete( id ) } > Delete </button>

        <p> { completionDate  } </p>
    </div>
  )
}

export default React.memo(TodoItem)  ;
