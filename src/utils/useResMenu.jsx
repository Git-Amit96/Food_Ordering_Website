import { useState, useEffect } from "react";
import { MENU_URL } from "./common";

const useRestMenu=(resId)=>{

    const [restData, setRestData] = useState(null);

    const fetchRestaurantData = async () => {
        const restDetails = await fetch(MENU_URL + resId);
        const json = await restDetails.json();
        setRestData(json);
    };

    useEffect(() => {
        fetchRestaurantData();
    }, []);

    return restData;
}

export default useRestMenu;