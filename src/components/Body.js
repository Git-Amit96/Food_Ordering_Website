import RestaurentCard from "./Rest_Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
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

    const [listRestaurants, setListRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6542&lng=77.2373");
        const json = await data.json();
        // * Optional Chaining
        setListRestaurants(json?.data?.success.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional Rendering
    // if(listRestaurants.length ===0){

    //     return <Shimmer/>;

    // }

    return listRestaurants.length === 0 ? <Shimmer /> : (
        <div className="Body">
            <div className="Button-Container">

                <button
                    onClick={() => {
                        const FilteredList = listRestaurants.filter((res) => { return res.info.avgRating > 4.5 });
                        setListRestaurants(FilteredList);

                    }}

                >Top Rated Restaurants </button>

                
                <button
                    onClick={() => {

                        const FilteredList = listRestaurants.filter((res) => { return res.info.costForTwo <= 200 });
                        setListRestaurants(FilteredList);

                    }}

                >Cheapest</button>

            </div>
            <div className="Restaurent-container">
                {
                    listRestaurants.map((restInfo) => <RestaurentCard key={restInfo.info.id} restData={restInfo} />)
                }
            </div>
        </div>
    )
}
export default Body;