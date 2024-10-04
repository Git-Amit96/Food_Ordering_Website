import { CARD_URL } from "../utils/common";
const RestaurentCard = (props) => {
    const { restData } = props;
    return (
        <div className="RestaurentCard bg-pink-100 mb-7 w-[240px] rounded-xl p-4 mt-4 shadow-lg z-0 transform transition-transform duration-400 hover:scale-105">
            {/* {console.log(restData)} */}
            <img src={CARD_URL + restData.info.cloudinaryImageId} className="rounded-xl max-h-[80%]" />
            
            <div className="RestCard-Info p-4">
                <h3 className="font-bold text-xl h-[63px] w-[100%] overflow-hidden">{restData.info.name}</h3>
                
                <h4 className="text-md font-semibold">{(restData.info.areaName)}</h4>
                
                <p className="h-[60px] w-[100%] text-sm">{(((restData.info.cuisines).slice(0,5)).join(", "))}</p>
                <div className="cardView">
                    <h3>{`Rating: ${restData.info.avgRating}`}⭐️</h3>
                    
                </div>
                <p>{`Cost: ${restData.info.costForTwo}`}</p>

            </div>
        </div>
    )

}

export const UpgradedRestaurantCard=(RestaurentCard)=>{
    return (props)=>{
        return (
            <div className="border-3 border-yellow-200 transform transition-transform duration-400 hover:scale-105">
                <label className="p-2 bg-black text-white rounded-md absolute z-10">Veg 🟩</label>
                <RestaurentCard {...props}/>
            </div>
        )
    }
}

export default RestaurentCard;