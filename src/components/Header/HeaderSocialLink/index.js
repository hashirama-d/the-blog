
const HeaderSocialLink = ({ socialLink }) => (
    <a className="header-social__link menudesktop" href={socialLink.field_link.uri}>
        <img
            src={"http://91.107.217.207" + socialLink.field_icon_svg.uri.url}
            alt={socialLink.field_icon_svg.meta.alt}
            width="22px"
            height="22px"/>
    </a>
);

export default HeaderSocialLink;