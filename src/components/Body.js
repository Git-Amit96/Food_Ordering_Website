import RestaurentCard from "./Rest_Card";
import { useState } from "react";
import { restList } from "../utils/mock_data";

const Body = () => {
    let [listRestaurants, setListRestaurants] = useState(restList);
    return (
        <div className="Body">
            <div className="Button-Container">

                <button
                    onClick={() => {
                        const FilteredList = restList;
                        setListRestaurants(FilteredList);

                    }}

                >All Restaurants</button>



                <button
                    onClick={() => {
                        listRestaurants= restList;
                        const FilteredList = listRestaurants.filter((res) => { return res.avgRating > 4 });
                        setListRestaurants(FilteredList);

                    }}

                >Top Rated Restaurants </button>


                <button
                    onClick={() => {
                        listRestaurants= restList;
                        const FilteredList = listRestaurants.filter((res) => { return res.costForTwo <= 200 });
                        setListRestaurants(FilteredList);

                    }}

                >Cheapest</button>

            </div>
            <div className="Restaurent-container">
                {
                    listRestaurants.map((restInfo) => <RestaurentCard key={restInfo.id} restData={restInfo} />)
                }
            </div>
        </div>
    )

}
export default Body;