import React from "react";
import ReactDOM from "react-dom/client";
import restList from "./data.js";

const Header = () => {
  const imageSource = require("./src/images/logo.png");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={imageSource} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines, avgRating, sla }  = resData;
  const ratingValue = avgRating;
  const starPercentage = (ratingValue / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId})` }}
      ></div>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-info">{cuisines.join(", ")}</p>
        <div className="card-rating-outer">
          <div
            className="card-rating-inner"
            style={{ width: starPercentageRounded }}
          ></div>
        </div>
        <span className="rating-value">{avgRating}</span>
        <p className="card-info card-eta">{`ETA: ${sla.deliveryTime} mins`}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
