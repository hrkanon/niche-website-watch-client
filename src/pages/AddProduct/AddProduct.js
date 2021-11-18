import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddProduct.css";

const AddProduct = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://mighty-retreat-24462.herokuapp.com/addProduct", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added a Product successfully!");
          history.push("/allProducts");
        }
      });
  };
  return (
    <div className="mt-4">
      <div className="add-product py-4">
        <h2 className="text-center heading">
          <span className="heading-color">Add </span>a Product
        </h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="py-2 ps-2"
            {...register("title", { required: true, maxLength: 20 })}
            placeholder="Title"
          />
          <textarea
            className="py-2 ps-2"
            {...register("description")}
            placeholder="Description"
          />
          <input
            className="py-2 ps-2"
            type="number"
            {...register("price")}
            placeholder="Price"
          />
          <input
            className="py-2 ps-2"
            {...register("img")}
            placeholder="image url"
          />
          <input className="submit-btn btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
