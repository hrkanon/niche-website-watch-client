import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset(data);
    fetch("https://mighty-retreat-24462.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setSuccess(true);
          console.log(result);
        }
      });
  };

  return (
    <div className="container">
      <div>
        <div className="my-4">
          <h2 className="heading text-center">
            <span className="heading-color"> Make</span> a new Admin
          </h2>
          <div className="underline-div mx-auto"></div>
        </div>
        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-field w-75 py-2 px-2"
            name="email"
            placeholder="Email"
            type="email"
            {...register("email", { required: true })}
          ></input>
          <br /> <br />
          {success &&
            ["success"].map((variant, idx) => (
              <Alert className="w-75 mx-auto" key={idx} variant={variant}>
                <i class="fas fa-check-circle me-2"></i>Admin created
                successfully!
              </Alert>
            ))}
          <input
            className="btn btn-danger mt-3"
            type="submit"
            value="Make as Admin"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
