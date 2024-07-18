import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;
  const ratingValue = avgRating;
  const starPercentage = (ratingValue / 5) * 100;
  const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${CDN_URL}${cloudinaryImageId})` }}
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

export default RestaurantCard;
