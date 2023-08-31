import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderSocialLinks from "./HeaderSocialLinks/HeaderSocialLinks";
import './Header.scss';
import HeaderBurger from "./HeaderBurger/HeaderBurger";
import useFetch from "../../hooks/useFetch";

const Header = ({isModalOpen, setIsModalOpen}) => {

    // Data fetching
    const {data: menuLinks} = useFetch(process.env.REACT_APP_ROOT_ADDRESS + "/jsonapi/menu_link_content/menu_link_content", "menuLinks")
    const {data: blogLogo} = useFetch(process.env.REACT_APP_ROOT_ADDRESS + "/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image",
        "blogLogo")
    const {data: socialLinks} = useFetch(process.env.REACT_APP_ROOT_ADDRESS + "/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg",
        "socialLinks")

    return (
        <section className="header">
            <div className="container">
                    <div className="dark">
                        <header className="header__inner row d-flex ">
                            <div className="header__left col-lg-9 col-md-6 col-6 gx-0 gx-md-4 d-flex align-items-center">
                                <HeaderMenu items={menuLinks.data} logo={blogLogo.data.field_image}/>
                            </div>
                            <div className="header__right col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-end gx-0 gx-md-4">
                                <HeaderSocialLinks socialLinks={socialLinks.data.field_social_links}/>
                                <HeaderBurger onBurgerClick={setIsModalOpen}/>
                            </div>
                        </header>
                    </div>
            </div>
        </section>
    );
}

export default Header;
