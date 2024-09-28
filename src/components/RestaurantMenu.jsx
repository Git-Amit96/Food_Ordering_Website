import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/common";

const RestaurantMenu = () => {
    
    const {restId} = useParams();
    
    
    const [restData, setRestData] = useState(null);
    
    const menuList= restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.carousel;
    const fetchRestaurantData = async () => {
        const restDetails = await fetch(MENU_URL + restId);
        const jsonn = await restDetails.json();
        setRestData(jsonn);
        console.log(jsonn);
        console.log(restId);
    }

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    if (restData === null) {
        return <Shimmer />;
    }

    return (
        <div>
            <h2>{restData?.data?.cards[2]?.card?.card?.info?.name}</h2>
            <h4>Locality: {restData?.data?.cards[2]?.card?.card?.info?.locality}</h4>
            <p>Area: {restData?.data?.cards[2]?.card?.card?.info?.areaName}</p>
            <br />
            <h3>Menu</h3>
            <ul>
                {menuList.map((item)=><li>{item.title} &nbsp; Rs: {(item.dish.info.price/100)}</li>)}
                
            </ul>
        </div>
    );
}

export default RestaurantMenu;