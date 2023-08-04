import HeaderMenu from "./HeaderMenu";
import HeaderSocialLinks from "./HeaderSocialLinks";
import './style.scss';
import HeaderBurger from "./HeaderBurger";
import {useQuery} from "react-query";
import HeaderMenuModal from "./HeaderMenuModal";
import {useState} from "react";
import FadeInOut from "../FadeInOut";

const Header = () => {
    const {data: menuLinks} = useQuery("menuLinks", () =>
        fetch("http://91.107.217.207/jsonapi/menu_link_content/menu_link_content")
            .then((resp) => resp.json()));

    const {data: blogLogo} = useQuery("blogLogo", () =>
        fetch("http://91.107.217.207/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image")
            .then((resp) => resp.json()));

    const {data: socialLinks} = useQuery("socialLinks", () =>
        fetch("http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg")
            .then((resp)=> resp.json()));

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="container">
                <div className="dark">
                    <header className="header row d-flex ">
                        <div className="col-lg-9 col-md-6 col-6 gx-0 gx-md-4">
                            <HeaderMenu items={menuLinks.data} logo={blogLogo.data.field_image}/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-end gx-0 gx-md-4">
                            <HeaderSocialLinks socialLinks={socialLinks.data.field_social_links}/>
                            <HeaderBurger onBurgerClick={setIsModalOpen}/>
                        </div>
                    </header>
                </div>
            </div>
            <FadeInOut show={isModalOpen} duration={500}>
                    <HeaderMenuModal onCloseModal={setIsModalOpen} menuLinks={menuLinks} socialLinks={socialLinks}/>
            </FadeInOut>
        </>
    );
}


export default Header;
