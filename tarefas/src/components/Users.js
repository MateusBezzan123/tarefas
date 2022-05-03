import React from "react";
import { Table } from 'react-bootstrap'
class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],  
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>{
            this.setState({users: data});
        })
    }

    componentWilMount(){
        alert("O componente de users foi criado!")
    }
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Usuario do Sistema</th>
                        <th>Email</th>
                        <th>Opçoes</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.users.map((user) =>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>Atualizar Excluir</td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }

}

export default Users;