import HeaderMenuItem from "../HeaderMenuItem";
import PropTypes from "prop-types";
import HeaderLogo from "../HeaderLogo";


const HeaderMenu = ({ items = [], logo}) => {
    return (
        <>
            <HeaderLogo logo={logo}/>
            <nav className="header__menu">
                <ul className="header__menu-items">
                    {items.map((item) => (
                        <HeaderMenuItem key={item.id} item={item}/>
                    ))}
                </ul>
            </nav>
        </>
    )
};



HeaderMenu.propTypes = {
    items: PropTypes.array,
}

export default HeaderMenu;