import HeaderMenuItem from "../HeaderMenuItem";
import PropTypes from "prop-types";
import HeaderLogo from "../HeaderLogo";
// import {useQuery} from "react-query";


const HeaderMenu = ({ items = [], logo}) => {
    // const {data: menuLinks1} = useQuery("menuLinks", () => fetch("http://91.107.217.207/jsonapi/menu_link_content/menu_link_content").then((resp) => resp.json()));
    // console.log(menuLinks1);
    return (
        <nav className="header-menu">
        <HeaderLogo logo={logo}/>
        {
            items.map((item) => (
            <HeaderMenuItem key={item.id} item={item}/>
        ))
        }
        </nav>
    )
};



HeaderMenu.propTypes = {
    items: PropTypes.array,
}

export default HeaderMenu;