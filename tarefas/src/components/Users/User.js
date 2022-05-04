import React from "react";
import "./user.css";
import Button from "react-bootstrap/Button";

const User = ({ id, email, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <table className="table"  id="table-to-xls">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              <Button
                variant="secondary"
                className="button"
              >
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

export default User;
