import React from "react";
import { Table } from 'react-bootstrap'
class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],  
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
                    <tr>
                        <td>Luiz</td>
                        <td>Luiz123</td>
                        <td>luiz@gmail.com</td>
                        <td>Atualizar Excluir</td>
                    </tr>
                </tbody>
            </Table>
        )
    }

}

export default Users;