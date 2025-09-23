import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [ listOfRestaurents, setListOfRestaurents] = useState(resList)
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="filter">
            <button className="filter-btn" onClick={() => 
                {
                    const filteredData = listOfRestaurents.filter(
                        (res) => res.info.avgRating > 4
                    );
                setListOfRestaurents(filteredData);
                }
            }>Top Rated Restaurants</button>
         </div>
         <div className="res-container">
            { listOfRestaurents.map((restaurant) => ( <RestaurantCard key={restaurant.info.id} resData={restaurant} />))}
         </div>
      </div>
   )
}

export default Body;