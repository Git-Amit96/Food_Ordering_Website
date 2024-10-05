import RestaurentCard, { UpgradedRestaurantCard } from "./Rest_Card";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import showOnlineStatus from "../utils/showOnlineStatus.jsx";
import FetchRestaurantsData from "../utils/FetchRestaurantsData.js";

const Body = () => {

    const [searchValue, setSearchValue] = useState("");
    const { restaurantData, FilterRestaurantData, setFilterRestaurantData } = FetchRestaurantsData();
    const status = showOnlineStatus();
    const PromtedCard = UpgradedRestaurantCard(RestaurentCard);
    // const {loggedInUse, setUserName}= useContext(UserContext);

    if (status === false) {
        return <h1>Looks like you are Offline!!!!</h1>
    }
    return restaurantData.length === 0 ? <Shimmer /> : (
        <div className=" px-10 bg-blue-200 ">
            <div className="flex justify-start items-center gap-10 py-4  bg-blue-200">
                <button className=" btn hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white"
                    onClick={() => {
                        setFilterRestaurantData(restaurantData);
                    }}
                >All Restaurants
                </button>

                <button className="hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white"
                    onClick={() => {
                        const FilteredList = restaurantData.filter((res) => { return res.info.avgRating >= 4.4 });
                        setFilterRestaurantData(FilteredList);
                    }}
                >Top Rated Restaurants
                </button>
                <button className="hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white"
                    onClick={() => {
                        const FilteredList = restaurantData.filter((res) => { return res.info.costForTwo.slice(1, 4) <= 300 });
                        setFilterRestaurantData(FilteredList);
                    }}
                >Cheapest
                </button>
                {/* <div>
                    <label>User: </label>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)} value={loggedInUse}/>
                </div> */}
                <div className="w-[50%] box-border ">
                    <input className="search-container w-[70%] rounded-xl py-1 px-3 border-solid border-2 border-gray-400 mr-6" placeholder="Search Restaurants" type="text" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
                    <button onClick={() => {
                        const Filter = restaurantData.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                        setFilterRestaurantData(Filter)

                    }} className="hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white">Search</button>

                </div>
            </div>
            <div className="Restaurent-container flex flex-wrap justify-between">
                {FilterRestaurantData.map((restInfo) => {

                    return (
                        <Link to={`/restaurants/${restInfo.info.id}`} key={restInfo.info.id}>
                            {restInfo.info.veg
                                ? <PromtedCard restData={restInfo} /> : <RestaurentCard restData={restInfo} />}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default Body;