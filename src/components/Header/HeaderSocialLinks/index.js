import HeaderSocialLink from "../HeaderSocialLink";


const HeaderSocialLinks = ({ socialLinks }) => {
    return (
        <div className="header__social-links">
            {socialLinks.map((socialLink) => (
                <HeaderSocialLink key={socialLink.id} socialLink={socialLink}/>
            ))}
        </div>
    );
}


export default HeaderSocialLinks;