import React, { useContext, useEffect, useState, alert} from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import "../../App.css"
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
        // console.log(users);
    }, []);

    const confirmDelete = (id) => {

        if (window.confirm("Are you sure you want to delete this user?")) {
            handleDelete(id);
        }

    }

    const handleDelete = async (id) => {
        {
            axios.delete(`http://localhost:8080/user/${id}`)
                .then(response => {
                    fetchUsers();
                })
                .catch(error => {
                    alert("Not Deleteded ");
                })
        }
    }

    const fetchUsers = async () => {
        axios.get('http://localhost:8080/users')
            .then(response => {

                setUsers(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div className='container'>
            <div className='py-4'>

                <table className="table border shadow  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Orders</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (

                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.title} {user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.totalOrders}</td>
                                    <td
                                        className='d-flex '
                                    >
                                        <Link to={`/users/view/${user.id}`} className="btn btn-outline-primary mx-2">View</Link>


                                        <Link to={`/users/edit/${user.id}`} className="btn btn btn-outline-warning mx-2">Edit</Link>

                                        <button className="btn btn-outline-danger mx-2"
                                            onClick={() => confirmDelete(user.id)}
                                        >Delete</button>
                                    </td>
                                </tr>

                            ))}

                    </tbody>
                </table>


            </div>

        </div>
    )
}

export default Users