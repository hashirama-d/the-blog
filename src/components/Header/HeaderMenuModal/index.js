import HeaderMenuModalLink from "../HeaderMenuModalLink";

const HeaderMenuModal = ({onCloseModal: setIsModalOpen, menuLinks, socialLinks}) => {
    return (
        <div className="menuModal">
            <div className="menuModal__btn-close">
                <button onClick={() => {
                    setIsModalOpen(false);
                }}> </button>
            </div>
            <nav className="menuModal__dropdown">
                {menuLinks.data.map((item) => (
                    <HeaderMenuModalLink key={item.id} title={item.title} description={item.description} link={item.link}/>
                ))}
                {socialLinks.data.field_social_links.map((item) => (
                    <HeaderMenuModalLink key={item.id} title={item.field_link.title} link={item.field_link} description={null}/>
                ))}
            </nav>
        </div>
    );
}

export default HeaderMenuModal;