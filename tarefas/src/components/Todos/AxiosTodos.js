import React, { useEffect, useState } from "react";
import './todos.css'
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import 'bootstrap/dist/css/bootstrap.min.css';


const AxiosTodos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (title) => {
    await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: title,
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
        setTodos((todos) => [...todos, data]);
        alert("Adicionou o Todo")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setTodos(
            todos.filter((todo) => {
              return todo.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className="App">
      <h3>Todos</h3>

      <br />
      <AddTodo onAdd={onAdd} />
      <div>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            title={todo.title}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AxiosTodos