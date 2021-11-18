import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);

  useEffect(() => {
    fetch("https://mighty-retreat-24462.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, [isDeleted]);

  const handleDelete = (productId) => {
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      fetch(
        `https://mighty-retreat-24462.herokuapp.com/deleteProduct/${productId}`,
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
      <h2 className="heading text-center">
        <span className="heading-color">Manage</span> All Products
      </h2>
      <div className="underline-div mx-auto mb-3"></div>
      <div className="">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Image</th>
              <th>Poduct Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {products.map((product, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <img
                      className="myOrder-img pe-1"
                      src={product?.img}
                      alt=""
                    />
                  </div>
                </td>
                <td>{product?.title}</td>
                <td>{product?.price}</td>
                <td>
                  <button
                    className="btn btn-outline-danger ms-1"
                    onClick={() => handleDelete(product._id)}
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

export default ManageProducts;
