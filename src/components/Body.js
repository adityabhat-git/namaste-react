import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restList);
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" placeholder="Type the name of your favorite restaurant here!"></input>
        <button className="search-btn" onClick={()=>{}}>Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(
              restaurantList.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(restList);
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="card-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
