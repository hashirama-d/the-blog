import {useEffect} from "react";
import "./style.scss";
const ScrollToTop = ({setIsScrolledDown}) => {
    const goToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});


    useEffect(() => {
        const handleScroll = event => {
            const scrolled = window.scrollY;
            // console.log(scrolled)
            if (scrolled > 100){
                setIsScrolledDown(true)
            }
            else if (scrolled <= 100){
                setIsScrolledDown(false)
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);

    });

    return (
        <button onClick={goToTop} className="scroll-to-top-btn">
            Back to Top
        </button>
    );
}

export default ScrollToTop;