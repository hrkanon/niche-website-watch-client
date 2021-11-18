import axios from "axios";
import "./AddReview.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AddReview = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    axios
      .post("https://mighty-retreat-24462.herokuapp.com/addReview", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added your review successfully!");
          history.push("/");
        }
      });
  };
  return (
    <div className="mt-4">
      <div className="add-product py-4">
        <h2 className="text-center heading">
          <span className="heading-color">GIVE </span> YOUR FEEDBACK
        </h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="py-2 ps-2"
            {...register("name", { required: true, maxLength: 20 })}
            value={user?.displayName}
          />
          <input
            className="py-2 ps-2"
            type="email"
            {...register("email")}
            value={user?.email}
          />
          <textarea
            className="py-2 ps-2"
            required
            {...register("feedback")}
            placeholder="Enter your words"
          />
          <select className="review-star py-2" {...register("star")}>
            <option value="fiveStar">Five Star</option>
            <option value="fourStar">Four Star</option>
            <option value="threeStar">Three Star</option>
            <option value="twoStar">Two Star</option>
            <option value="oneStar">One Star</option>
          </select>
          <br />
          <input className="submit-btn btn btn-primary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
