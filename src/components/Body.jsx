import RestaurentCard, { UpgradedRestaurantCard } from "./Rest_Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import showOnlineStatus from "../utils/showOnlineStatus.jsx"

// const fetchData = async () => {
//     try {
//         const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6542&lng=77.2373");
//         const json = await response.json();
//         newData = json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants;
//         console.log(newData); // Check what data is coming back
//         return newData;  // Return the data once fetched
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };


const Body = () => {

    const [searchValue, setSearchValue] = useState("");
    const [listRestaurants, setListRestaurants] = useState([]);
    const [filterListRestaurants, setFilterListRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627");
        const jsonn = await data.json();
        console.log(jsonn);
        // * Optional Chaining
        setListRestaurants(jsonn.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterListRestaurants(jsonn.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional Rendering
    // if(listRestaurants.length ===0){
    //     return <Shimmer/>;
    // }
    const status = showOnlineStatus();
    const PromtedCard = UpgradedRestaurantCard(RestaurentCard);

    if (status === false) {
        return <h1>Looks like you are Offline!!!!</h1>
    }

    return listRestaurants.length === 0 ? <Shimmer /> : (
        <div className=" px-10 bg-blue-200 ">
            <div className="flex justify-start items-center gap-10 py-4  bg-blue-200">
                <button className=" btn hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white"
                    onClick={() => {
                        setFilterListRestaurants(listRestaurants);
                    }}
                >All Restaurants
                </button>

                <button className="hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white"
                    onClick={() => {
                        const FilteredList = listRestaurants.filter((res) => { return res.info.avgRating >= 4.4 });
                        setFilterListRestaurants(FilteredList);
                    }}
                >Top Rated Restaurants
                </button>
                <button className="hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white"
                    onClick={() => {
                        const FilteredList = listRestaurants.filter((res) => { return res.info.costForTwo.slice(1, 4) <= 300 });
                        setFilterListRestaurants(FilteredList);
                    }}
                >Cheapest
                </button>
                <div className="w-[50%] box-border ">
                    <input className="search-container w-[70%] rounded-xl py-1 px-3 border-solid border-2 border-gray-400 mr-6" placeholder="Search Restaurants" type="text" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
                    <button onClick={() => {
                        const Filter = listRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase()));
                        setFilterListRestaurants(Filter)

                    }} className="hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white">Search</button>

                </div>
            </div>
            <div className="Restaurent-container flex flex-wrap justify-between">
                {filterListRestaurants.map((restInfo) => {

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