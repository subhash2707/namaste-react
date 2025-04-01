import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <img 
                className="logo"
                src={LOGO_URL}
                alt="Logo"
            />
            <nav>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;