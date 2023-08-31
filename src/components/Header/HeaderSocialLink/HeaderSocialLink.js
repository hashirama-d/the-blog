const HeaderSocialLink = ({ socialLink }) => (
    <a className="header__social-link" href={socialLink.field_link.uri} target="_blank" rel="noreferrer">
        <img
            src={process.env.REACT_APP_ROOT_ADDRESS + socialLink.field_icon_svg.uri.url}
            alt={socialLink.field_icon_svg.meta.alt}
            width="22px"
            height="22px"/>
    </a>
);

export default HeaderSocialLink;