import { useSelector } from "react-redux";
import { CategoryList } from "./CategoryList";
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    // ! the below code is very very efficient because it is subscribed to one specific portion of the store, this has to deal with changes in this particular portion of the store. So always subscribe to the right portion of the store.
    const cartItems = useSelector((store) => store.cart.items);

    // ! the below code is not efficient because it is subscribed to the whole store so any cahnge to this store will reflect here that has no use here.
    const store= useSelector((store)=> store);
    const dispatch = useDispatch();
    const clearCartItem = () => {
        dispatch(clearCart());
    }

    return (

        <div className="mt-5 font-bold text-center text-2xl flex flex-col items-center justify-center">Cart
            <button className="hover:text-blue-300 cursor-pointer bg-blue-300 px-[10px] py-1 rounded-md hover:bg-white text-white text-sm font-normal w-17 m-3" onClick={clearCartItem}>Clear Cart</button>
            {cartItems.length==0 && <h2>Cart is empty. Please add some items!!!</h2>}
            <div className="m-auto w-[60%] max-w-[700px] text-sm font-normal">
                <CategoryList list={cartItems} />
            </div>
        </div>
    )
}

export default Cart;