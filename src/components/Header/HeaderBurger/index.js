
const HeaderBurger = ({onBurgerClick: setIsModalOpen}) => {
    return (
        <button className="header-menu__btn header-menu__btn-open menumobile" onClick={() => setIsModalOpen(true)}> </button>
    );
}

export default HeaderBurger;