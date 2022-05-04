import React from "react";


const AddTodo = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value);
    e.target.title.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Adicionar Todos</h3>
        <input placeholder="Titulo" name="title"  />
        <button onSubmit={handleOnSubmit}>Adicionar</button>
        <hr />
      </form>
    </div>
  );
};

export default AddTodo;