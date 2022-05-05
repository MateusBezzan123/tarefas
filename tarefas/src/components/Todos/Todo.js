import React from "react";
import "./todos.css";
import Button from "react-bootstrap/Button";

const Todo = ({ id, title, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <table className="table" id="table-to-xls">
        <thead className="thead-dark">
          <tr>
            <th>Titulo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
            <td>
              <Button variant="secondary" className="button">
                Editar
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Deletar
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
