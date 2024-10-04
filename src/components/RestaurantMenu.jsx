import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu.jsx";
import { MenuDescription } from "./MenuDescription.jsx";



const RestaurantMenu = () => {

    const { restId } = useParams();
    const restData = useResMenu(restId);
    let sectionList = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(items=>items?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    // console.log(restData)
    // sectionList = sectionList.filter(items=>items?.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   

    // const checkVisible=()=>{
    //     setIsVisible(!isVisible);
    // }


    if (restData === null) {
        return <Shimmer />
    };


    return (

        <div className="header mt-4 text-center">
            <div className="font-bold text-2xl">{restData?.data?.cards[2]?.card?.card?.info?.name}</div>
            <div className="text-xl">Cost: {restData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</div>
            {sectionList.map((items) => <MenuDescription data={items?.card?.card} />)}
        </div>

    );
}

export default RestaurantMenu;