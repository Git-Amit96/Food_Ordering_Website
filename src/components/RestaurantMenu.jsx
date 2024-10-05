import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu.jsx";
import { MenuDescription } from "./MenuDescription.jsx";
import { useState } from "react";



const RestaurantMenu = () => {

    const { restId } = useParams();
    const restData = useResMenu(restId);
    const [isVisible, setIsVisible] = useState(null);
    let sectionList = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(items=>items?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    if (restData === null) {
        return <Shimmer />
    }
    return (

        <div className="header mt-4 text-center">
            <div className="font-bold text-2xl">{restData?.data?.cards[2]?.card?.card?.info?.name}</div>
            <div className="text-xl">Cuisines: {restData?.data?.cards[2]?.card?.card?.info?.cuisines.join(', ')} Cost: {restData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
                {/* {console.log(restData?.data?.cards[2]?.card?.card?.info)} */}
            </div>
            {sectionList.map((items, index) => <MenuDescription data={items?.card?.card} key={items?.card?.card.title} showCards={index==isVisible? true : false} setCardsVisibilty={(check)=> check ? setIsVisible(index): setIsVisible(null)}/>)}
        </div>
    )
}

export default RestaurantMenu;