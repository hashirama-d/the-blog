import MenuModalLink from "../MenuModalLink/MenuModalLink";
import './MenuModal.scss';
import useFetch from "../../hooks/useFetch";

const MenuModal = ({onCloseModal: setIsModalOpen, isModalOpen}) => {

    // Data fetching
    const {data: socialLinks} = useFetch("http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg",
        "socialLinks")
    const {data: menuLinks} = useFetch("http://91.107.217.207/jsonapi/menu_link_content/menu_link_content","menuLinks");

    return (
        <div className={"menu-modal"}>
            <div className="menu-modal__btn-close">
                <button onClick={() => {
                    setIsModalOpen(false);
                }}> </button>
            </div>

            <nav className="menu-modal__dropdown">
                {menuLinks.data.map((item) => (
                    <MenuModalLink key={item.id} title={item.title} description={item.description} link={item.link}/>
                ))}
                {socialLinks.data.field_social_links.map((item) => (
                    <MenuModalLink key={item.id} title={item.field_link.title} link={item.field_link} description={null}/>
                ))}
            </nav>
        </div>
    );
}

export default MenuModal;