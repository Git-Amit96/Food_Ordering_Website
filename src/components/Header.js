import { LOGO_URL } from "../utils/common";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="Search-Bar">Search</div>
            <div className="navigation-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Sign In</li>
                </ul>
            </div>
        </div>

    )
}
export default Header;