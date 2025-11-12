import { CDN_URL } from "../utils/constants";
import React from "react";


const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src= {CDN_URL + cloudinaryImageId} 
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <span> {avgRating} ★</span> Ratings
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;