
const HeaderBurger = ({onBurgerClick: setIsModalOpen}) => {
    return (
        <button className="header__menu-btn header__menu-btn-open menumobile" onClick={() => setIsModalOpen(true)}> </button>
    );
}

export default HeaderBurger;