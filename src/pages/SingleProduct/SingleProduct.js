import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://mighty-retreat-24462.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, []);

  const onSubmit = (data) => {
    data.product = product;
    data.status = "Pending";
    console.log(data);
    axios
      .post("https://mighty-retreat-24462.herokuapp.com/addOrder", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added the Product successfully!");
          history.push("/dashboard/myOrders");
        }
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center mt-3">
            <img className="img-fluid" src={product.img} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mt-3 p-3">
            <h4>MICHAEL KORS</h4>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
          <div className="add-product py-4">
            <h2 className="text-center">Please Confirm the Order</h2>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="py-2 ps-2"
                {...register("name", { required: true, maxLength: 20 })}
                value={user?.displayName}
              />
              <input
                className="py-2 ps-2"
                {...register("email", { required: true, maxLength: 20 })}
                value={user?.email}
              />
              <textarea
                className="py-2 ps-2"
                {...register("address")}
                placeholder="Address"
              />
              <input
                className="py-2 ps-2"
                type="number"
                {...register("phone")}
                placeholder="Phone"
              />
              <input
                className="py-2 ps-2"
                {...register("delevery")}
                type="date"
                placeholder="Delevery Date"
              />
              <input
                className="submit-btn btn btn-primary"
                type="submit"
                value="Order Now"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
