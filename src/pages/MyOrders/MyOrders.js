import React, { useEffect, useState } from "react";
import "./MyOrders.css";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  const { user } = useAuth();
  const email = user?.email;
  useEffect(() => {
    fetch(`https://mighty-retreat-24462.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  const handleDelete = (orderId) => {
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      fetch(
        `https://mighty-retreat-24462.herokuapp.com/deleteOrder/${orderId}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.deleteCount) {
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center mt-2 heading">
        <span className="heading-color">My:</span> Orders
      </h2>
      <div className="underline-div mx-auto mb-3"></div>
      <div className="container overflow-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Delevery</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        className="myOrder-img pe-1"
                        src={order.product?.img}
                        alt=""
                      />
                    </div>
                    <div>{order.product?.title}</div>
                  </div>
                </td>
                <td className="my-auto">{order?.delevery}</td>
                <td>{order?.status}</td>
                <td>${order?.product?.price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger ms-1"
                    onClick={() => handleDelete(order._id)}
                  >
                    <i class="fas fa-trash-alt"></i> Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyOrders;
