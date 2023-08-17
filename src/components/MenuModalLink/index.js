const MenuModalLink = ({link, title, description}) => {
    return (
        <a className={
            link.uri.includes("internal:/")
            ? "menu-modal__link active" : "menu-modal__link"
        }
           href={link.uri === "route:<nolink>"
               ? "#"
               : link.uri.replace("internal:/", "")}>
            <div className="menu-modal__link-arrow">↳</div>
            <div className="menu-modal__link-title">{title}</div>
            <div className="menu-modal__link-desc">{description}Lorem ipsum dolor, sit amet.</div>
        </a>
    )
}
export default MenuModalLink;