import "./style.scss";
const ScrollToTop = ({onClick}) => {

    return (
        <button onClick={onClick} className="scroll-to-top-btn">
            Back to Top ↑
        </button>
    );
}

export default ScrollToTop;