import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://mighty-retreat-24462.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => setAllProducts(result));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <div>
          <h2 className="text-center mt-5 heading">
            {" "}
            <span className="heading-color">Our</span> Collection
          </h2>
          <div className="underline-div mx-auto"></div>
        </div>
        <div className="row g-3 mt-4">
          {allProducts.map((product) => (
            <div key={product._id} className="col-md-4">
              <Link
                to={`/product/${product._id}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="card product-card m-2 p-3">
                  <div className="img-container text-center p-3">
                    <img className="img-fluid" src={product.img} alt="" />
                  </div>
                  <div className="mt-3">
                    <p>{product.title}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <h3 className="price fw-bold">${product.price}</h3>
                    </div>
                    <div>
                      <button className=" btn btn-danger">
                        Buy Now <i class="fas fa-angle-double-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
