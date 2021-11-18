import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const selectedProduct = products.slice(0, 6);

  useEffect(() => {
    fetch("https://mighty-retreat-24462.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);
  return (
    <div>
      <div className="container my-5">
        <div className="text-center mt-5">
          <p>
            360<sup>o</sup> COLLECTION
          </p>
          <div className="underline-div mx-auto"></div>
          <h2 className="mt-3 heading">
            <span className="heading-color">FEATURED</span> PRODUCTS
          </h2>
        </div>
        <div className="row g-3 mt-4">
          {selectedProduct.map((product) => (
            <div key={product._id} className="col-md-4">
              <Link
                to={`/product/${product._id}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <div className="card product-card  p-3">
                  <div className="img-container  text-center p-3">
                    <img className="" src={product.img} alt="" />
                  </div>
                  <div className="product-info">
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
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
