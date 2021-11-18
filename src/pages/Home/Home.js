import React from "react";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Catagory></Catagory>
      <Products></Products>
      <Review></Review>
    </>
  );
};

export default Home;
