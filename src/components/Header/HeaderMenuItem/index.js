import PropTypes from "prop-types";

const HeaderMenuItem = ({ item }) => {
    return (
        <li className="header__menu-item">
            <a className={
                item.link.uri.includes("internal:/")
                    ? "header__menu-item-link active" : "header__menu-item-link"
            }
               href={item.link.uri === "route:<nolink>"
                   ? "#"
                   : item.link.uri.replace("internal:/", "")}>
                {item.title}
            </a>
        </li>
)};

HeaderMenuItem.propTypes = {
    item: PropTypes.shape({
        link: PropTypes.shape({
            uri: PropTypes.string,
        }),
        title: PropTypes.string,
        id: PropTypes.string
    })
}

export default HeaderMenuItem;