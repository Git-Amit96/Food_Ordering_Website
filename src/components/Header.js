import { useState } from "react";
import { LOGO_URL } from "../utils/common";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            
            <div className="navigation-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Sign In</li>
                    <button
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