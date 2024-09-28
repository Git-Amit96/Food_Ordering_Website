import { CARD_URL } from "../utils/common";
const RestaurentCard = (props) => {
    const { restData } = props;
    return (
        <div className="RestaurentCard">
            {/* {console.log(restData)} */}
            <img src={CARD_URL + restData.info.cloudinaryImageId} />
            
            <div className="RestCard-Info">
                <h3>{restData.info.name}</h3>
                <br></br>
                <h4>{(restData.info.areaName)}</h4>
                <br></br>
                <p>{(((restData.info.cuisines).slice(0,3)).join(", "))}</p>
                <div className="cardView">
                    <h3>{`Rating: ${restData.info.avgRating} stars`}</h3>
                    
                </div>
                <p>{`Cost: ${restData.info.costForTwo}`}</p>

            </div>
        </div>
    )

}

export default RestaurentCard;