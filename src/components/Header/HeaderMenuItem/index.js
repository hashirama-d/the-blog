import PropTypes from "prop-types";

const HeaderMenuItem = ({ item }) => {
    if (item.link.uri === "route:<nolink>") {

    }
    return (
    <a className="header-menu__item menudesktop" href={item.link.uri === "route:<nolink>"
        ? "#"
        : item.link.uri.replace("internal:/", "")}>
        {item.title}
    </a>
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