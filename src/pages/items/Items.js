import React, { useContext, useEffect, useState, alert} from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import "../../App.css"
import { Link } from 'react-router-dom';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
        // console.log(users);
    }, []);

    const confirmDelete = (id) => {

        if (window.confirm("Are you sure you want to delete this item?")) {
            handleDelete(id);
        }

    }

    const handleDelete = async (id) => {
        {
            axios.delete(`http://localhost:8080/item/${id}`)
                .then(response => {
                    fetchItems();
                })
                .catch(error => {
                    alert("Not Deleteded ");
                })
        }
    }

    const fetchItems = async () => {
        axios.get('http://localhost:8080/items')
            .then(response => {

                setItems(response.data);
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
                            <th scope="col">Item</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map((item, index) => (
                                

                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td
                                        className='d-flex '
                                    >
                                        <Link to={`/items/view/${item.itemId}`} className="btn btn-outline-primary mx-2">View</Link>


                                        <Link to={`/items/edit/${item.itemId}`} className="btn btn btn-outline-warning mx-2">Edit</Link>

                                        <button className="btn btn-outline-danger mx-2"
                                            onClick={() => confirmDelete(item.itemId)}
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

export default Items