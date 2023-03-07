import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

const ViewItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState('');

  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    const result = await axios.get(`http://localhost:8080/item/${id}`);
    setItem(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="card border-0 shadow">
          <div className="card-header">Item Detail</div>
          <div className="card-body">
            <ul className="list-group w-100">

              <li className="list-group-item">
                <span className="list-group-item-name">Type</span>
                <span className="list-group-item-value">{item.itemType}</span>
              </li>

              <li className="list-group-item">
                <span className="list-group-item-name">Name</span>
                <span className="list-group-item-value">
                  {item.itemName}
                </span>
              </li>
              <li className="list-group-item">
                <span className="list-group-item-name">Description</span>
                <span className="list-group-item-value">{item.itemDescription}</span>
              </li>
              <li className="list-group-item">

                <img src={item.itemImage} alt="item"

                  style={{ maxHeight: "200px" }}

                />
              </li>
              <li className="list-group-item">
                <span className="list-group-item-name">Price</span>
                <span className="list-group-item-value">{item.itemPrice}</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
