
const HeaderBurger = ({onBurgerClick: setIsModalOpen}) => {
    return (
        <button className="header__menu-btn" onClick={() => setIsModalOpen(true)}> </button>
    );
}

export default HeaderBurger;