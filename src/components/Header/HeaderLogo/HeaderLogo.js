const HeaderLogo = ({logo}) => (
    <a href="/" className="header__logo">
        <img
            src={process.env.REACT_APP_ROOT_ADDRESS + logo.uri.url}
            alt={logo.meta.alt}
            width="40px"
            height="40px"
        />
    </a>
)

export default HeaderLogo;