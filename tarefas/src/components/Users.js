import React from "react";
import { Table } from 'react-bootstrap'
class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {'id': 1, 'nome':'Luiz Fernando','username':'Lu', 'email':'luiz@gmail.com'},
                {'id': 2, 'nome':'Mateus Bezzan', 'username':'bezzan','email':'mateus@gmail.com'},
                {'id': 3, 'nome':'Nayara', 'username':'Nay','email':'nay@gmail.com'},
            ],  
        }
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
                            <td>{user.nome}</td>
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