import { CARD_URL } from "../utils/common";
const RestaurentCard = (props) => {
    const { restData } = props;
    return (
        <div className="RestaurentCard">
            <img src={CARD_URL + restData.cloudinaryImageId} />
            <div className="RestCard-Info">
                <h3>{restData.name}</h3>
                <br></br>
                <h4>{(restData.areaName).toUpperCase()}</h4>
                <br></br>
                <p>{((((restData.cuisines).slice(0, 2))).join(", "))}</p>
                <div className="cardView">
                    <h3>{`Rating: ${restData.avgRating} stars`}</h3>
                    <button>View</button>
                </div>
                <p>{`Cost for Two: ${restData.costForTwo}`}</p>

            </div>
        </div>
    )

}
export default RestaurentCard;