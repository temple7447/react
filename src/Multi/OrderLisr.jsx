import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import EcommerceCard from '../Main/StoredCard';

const OrderList = ({ Order, timeFormat, dateformat, id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://charming-cod-gaiters.cyclic.app/upload_Categories')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const matchingItems = data?.filter((item1) =>
    Order?.some((item2) => item2 === item1?._id)
  );

  return (
    <div className="order-list">
      <ul>
        <li className="order-item">
          <div className="order-header">
            <span className="order-id">Order ID: {id}</span>
            <span className="order-date">
              Date: {dateformat} {timeFormat}
            </span>
          </div>
          <div className="order-content">
            <p>Order Array:</p>
            <ul>
              {matchingItems?.map((item, index) => (
                <EcommerceCard key={index} storedData={item} />
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrderList;
