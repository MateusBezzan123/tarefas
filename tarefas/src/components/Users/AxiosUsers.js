import React, { useEffect, useState } from "react";
import './user.css'
import AddUser from "./AddUser";
import User from "./User";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHTMLTableToExcel from "react-html-table-to-excel";


const AxiosUsers = () => {
  const [users, setUsers] = useState([]);


  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
        alert("Adicionou o Usuario")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
        alert("Deletou o Usuario")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const onUpdate = async (id,name, email) => {
  //   await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       id: id,
  //       name: name,
  //       email: email,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status !== 201) {
  //         return;
  //       } else {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       setUsers((users) => [...users, data]);
  //       alert("Adicionou o Usuario")
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Usuarios", users);
  return (
    <div className="App">
      <h3>Usuarios</h3>

      <br />
      <AddUser onAdd={onAdd} />
      <div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button btn btn-success mb-3"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Exportar para Excel "
      />
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            email={user.email}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AxiosUsers