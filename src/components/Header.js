import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import showOnlineStatus from "../utils/showOnlineStatus.jsx"


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const status= showOnlineStatus();
    return (
        <div className="header flex m-0 px-10 py-3 justify-between items-center bg-blue-300 shadow-gray-400 shadow-md sticky top-0 z-10">
            <div className="flex">
                <img className="size-14 rounded-full" src={LOGO_URL}></img>
                
            </div>

            <div className="navigation-menu p-0">
                <ul className="flex gap-7 justify-between text-white items-center">
                    <li>Online Status: {status? "✅" : "🔴"}</li>
                    <li className="hover:text-yellow-300 cursor-pointer">
                        <Link to='/'> Home </Link>
                    </li>
                    <li className="hover:text-yellow-300 cursor-pointer">
                        <Link to='/About'> About </Link>
                    </li>
                    <li className="hover:text-yellow-300 cursor-pointer">
                        <Link to='/Contact'> Contact </Link>
                    </li>
                    <li className="hover:text-yellow-300 cursor-pointer">Cart</li>
                    <li className="hover:text-yellow-300 cursor-pointer">Sign In</li>
                    <button className="hover:text-blue-300 cursor-pointer bg-blue-300 px-4 py-1 rounded-md hover:bg-white"
                        onClick={() => {
                            btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout")
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>

    )
}
export default Header;