const HeaderMenuModalLink = ({link, title, description}) => {
    return (
        <a className={
            link.uri.includes("internal:/")
            ? "menuModal__link active" : "menuModal__link"
        }
           href={link.uri === "route:<nolink>"
               ? "#"
               : link.uri.replace("internal:/", "")}>
            <div className="menuModal__link-arrow">↳</div>
            <div className="menuModal__link-title">{title}</div>
            <div className="menuModal__link-desc">{description}Lorem ipsum dolor, sit amet.</div>
        </a>
    )
}
export default HeaderMenuModalLink;