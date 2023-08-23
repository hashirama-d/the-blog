const HeaderLogo = ({logo}) => (
    <a href="/" className="header__logo">
        <img
            src={"http://91.107.217.207" + logo.uri.url}
            alt={logo.meta.alt}
            width="40px"
            height="40px"
        />
    </a>
)

export default HeaderLogo;