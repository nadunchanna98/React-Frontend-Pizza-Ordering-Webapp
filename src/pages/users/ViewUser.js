import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

const ViewUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState('');

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="card border-0 shadow">
          <div className="card-header">User Detail</div>
          <div className="card-body">
            <ul className="list-group w-100">

              <li className="list-group-item">
                <span className="list-group-item-name">Name</span>
                <span className="list-group-item-value">
                  {user.title} {user.name}
                </span>
              </li>
              <li className="list-group-item">
                <span className="list-group-item-name">Phone</span>
                <span className="list-group-item-value">{user.phone}</span>
              </li>
              <li className="list-group-item">
                <span className="list-group-item-name">Address</span>
                <span className="list-group-item-value">{user.address}</span>
              </li>
              <li className="list-group-item">
                <span className="list-group-item-name">Username</span>
                <span className="list-group-item-value">{user.username}</span>
              </li>
              <li className="list-group-item">
                <span className="list-group-item-name">Email</span>
                <span className="list-group-item-value">{user.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
