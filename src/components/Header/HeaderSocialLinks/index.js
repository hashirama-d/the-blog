import HeaderSocialLink from "../HeaderSocialLink";


const HeaderSocialLinks = ({ socialLinks }) =>
    socialLinks.map((socialLink) => (
        <HeaderSocialLink key={socialLink.id} socialLink={socialLink}/>
    ))

export default HeaderSocialLinks;