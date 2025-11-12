import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import React from "react";


const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/restaurants?lat=12.903942110837612&lng=77.57556796073914&collection=83633"
      );
      const data = await response.json();
      const restaurants = data.data.cards
        .slice(3) // skip non-restaurant widgets
        .map((card) => card.card.card) // unwrap nested objects
        .filter((restaurant) => restaurant && restaurant.info); // ensure info exists

      setListOfRestaurents(restaurants);
      console.log("Frontend got data:", data);
    } catch (err) {
      console.error("Frontend error:", err);
    }
  };

  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="body-head">
        <input
          type="text"
          className="search"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="btn-search"
          onClick={() => {
            const filteredData = listOfRestaurents.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurents(filteredData);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurents(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
