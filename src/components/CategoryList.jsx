import { CARD_URL } from "../utils/common";
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export const CategoryList = ({ list }) => {

    const dispatch = useDispatch();

    const handleAddItem = (items) => {
        // dispatch an action
        dispatch(addItem(items));
    };
    return (
        <div className="bg-slate-100 ">
            {list.map((items) =>
                <div className="mb-3 w-[100%] flex justify-between border-b-2 border-gray-500 p-4">
                    <div className="flex justify-start flex-col text-left w-9/12">
                        <div>
                            <span className="mr-2 font-bold text-lg">{items.card.info.name} </span>
                            {/* {console.log(items.card.info)} */}
                            <span className="font-medium">Rs. {items.card.info.price / 100}</span>

                        </div>
                        <p>{items.card.info.description}</p>

                    </div>
                    <div className="w-2/12 rounded-md flex flex-col justify-end items-center">
                        {/* {console.log(items)} */}
                        <img src={CARD_URL + items.card.info.imageId} alt="" className="rounded-md" />
                        <button className="bg-white text-green-400 absolute py-1 px-4 rounded-md font-bold text-md" onClick={() => handleAddItem(items)}>Add</button>
                    </div>
                    <hr />

                </div>)}
            {/* {console.log(list.itemCards[0].card.info.description)} */}
        </div>
    )
}

