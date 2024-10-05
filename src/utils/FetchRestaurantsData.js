import { useState, useEffect } from "react";
import { FetchRestaurant_URL } from "./common";

const FetchRestaurantsData = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [FilterRestaurantData, setFilterRestaurantData] = useState([]);

    const fetchData = async () => {
        const data = await fetch(FetchRestaurant_URL);
        const json = await data.json();
        setRestaurantData(json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurantData(json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { restaurantData, FilterRestaurantData, setFilterRestaurantData };
}

export default FetchRestaurantsData;