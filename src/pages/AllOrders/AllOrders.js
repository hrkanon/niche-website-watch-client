import React, { useEffect, useState } from "react";
import "./AllOrders.css";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);

  const [status, setStatus] = useState("");
  const [orderId, setOrderId] = useState("");
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch("https://mighty-retreat-24462.herokuapp.com/allOrders/")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isDeleted]);

  // Set Specific Id
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };

  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(
      `https://mighty-retreat-24462.herokuapp.com/statusUpdate/${orderId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          alert("Status Updated Successfully");
          console.log(result);
        }
      });
  };

  const handleDelete = (orderId) => {
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      fetch(
        `https://mighty-retreat-24462.herokuapp.com/deleteProduct/${orderId}`,
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
        <span className="heading-color">Manage</span> All Orders
      </h2>
      <div className="underline-div mx-auto mb-3"></div>
      <div className="container overflow-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Product</th>
              <th>Delevery Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {allOrders.map((order, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order?.phone}</td>
                <td>{order?.address}</td>
                <td>{order?.product?.title}</td>
                <td>{order?.delevery}</td>
                <td>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <select
                      className="p-2"
                      onClick={() => handleOrderId(order?._id)}
                      {...register("status")}
                    >
                      <option value="pending">{order.status}</option>
                      <option value="approve">approve</option>
                      <option value="done">Done</option>
                    </select>
                    <input
                      className="btn btn-success m-1 px-3"
                      type="submit"
                      value="update"
                    />
                  </form>
                </td>
                <td>
                  <button
                    className="btn btn-danger ms-1"
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

export default AllOrders;
