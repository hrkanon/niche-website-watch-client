import React from "react";
import "./Catagory.css";
import img1 from "../../images/category/for-him.jpeg";
import img2 from "../../images/category/for-her.jpeg";
import img3 from "../../images/category/smart-watch.jpeg";
import img4 from "../../images/category/sports-watch.jpeg";
import img5 from "../../images/category/gold-watch.jpeg";
import img6 from "../../images/category/oversized-watch.jpeg";
const catagories = [
  {
    text: "For Him",
    img: img1,
  },
  {
    text: "For Her",
    img: img2,
  },
  {
    text: "Smart Watch",
    img: img3,
  },
  {
    text: "Sport",
    img: img4,
  },
];
const Catagory = () => {
  return (
    <div className="catagory-sec my-5 py-5">
      <div>
        <h2 className="text-center heading">
          <span className="heading-color">OUR </span>CATEGORIES
        </h2>
        <div className="underline-div mx-auto"></div>
      </div>
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4 g-2ß g-lg-3">
          {catagories.map((catagory, index) => {
            return (
              <div key={index} className="each-catagory g-2">
                <div className="text-center catagory p-3">
                  <img className="w-50 rounded" src={catagory.img} alt="" />
                </div>
                <h4 className="text-center">{catagory.text}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
