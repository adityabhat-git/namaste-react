import React from "react";
import ReactDOM from "react-dom/client";
import behrouzBiryani from "./src/images/behrouz-biryani.png";
import kfc from "./src/images/kfc.png"

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
  const ratingValue = props.rating;
  const starPercentage = (ratingValue/5)*100;
  const starPercentageRounded = `${Math.round(starPercentage/10)*10}%`;

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.imageName})` }}
      ></div>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-info">{props.cuisines}</p>
        <div className="card-rating-outer">
          <div className="card-rating-inner" style={{width:starPercentageRounded}}></div>
        </div>
        <span className="rating-value">{props.rating}</span>
        <p className="card-info card-eta">{`ETA: ${props.eta} min`}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        <RestaurantCard
          title="Behrouz Biryani"
          cuisines="Biryani, North Indian, Asian"
          rating="4.5"
          eta="20"
          imageName={behrouzBiryani}
        />
        <RestaurantCard
          title="KFC"
          cuisines="Burgers, Fries, Chicken"
          rating="5"
          eta="10"
          imageName={kfc}
        />
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
