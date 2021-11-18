import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/banner/for-him-removebg-preview.png";
import img2 from "../../images/banner/banner-img2-removebg-preview.png";
import img3 from "../../images/banner/watch-removebg-preview.png";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="row text-white item-one carosel-item">
          <div className="col-md-6 my-auto text-center p-3">
            <h1 className="heading-one my-5">
              THE
              <span className="text-warning"> WATCH</span> <br /> EVERYONE
              DESIRE
            </h1>
            <button className="btn btn-warning">Shop Now</button>
          </div>
          <div className="col-md-6 my-auto">
            <div>
              <img className="d-block img-fluid" src={img1} alt="First slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row text-white item-two carosel-item">
          <div className="col-md-6 my-auto text-center p-3">
            <h1 className="heading-one my-5">
              <span className="text-warning">WATCH FOR</span> <br /> FASHIONABLE
              PEOPLE
            </h1>
            <button className="btn btn-warning">Shop Now</button>
          </div>
          <div className="col-md-6 my-auto">
            <div>
              <img
                className="d-block img-fluid"
                src={img2}
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="row text-white item-three carosel-item">
          <div className="col-md-6 my-auto text-center p-3">
            <h1 className="heading-one my-5">
              <span className="text-warning">WE PROVIDE</span> BEST <br />{" "}
              QUALITY WATCHES
            </h1>
            <button className="btn btn-warning">Check Our Watches</button>
          </div>
          <div className="col-md-6 my-auto">
            <div>
              <img className="d-block img-fluid" src={img3} alt="Third slide" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
