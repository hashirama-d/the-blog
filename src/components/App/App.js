import Header from "../Header/Header";
import {QueryClient, QueryClientProvider} from "react-query";
import {Suspense, useEffect, useState} from "react";
import PageTitle from "../PageTitle/PageTitle";
import TeasersBlock from "../TeasersBlock/TeasersBlock";
import Tutorials from "../Tutorials/Tutorials";
import EditorChoiceBlock from "../EditorChoiceBlock/EditorChoiceBlock";
import WebsiteDesignBlock from "../WebsiteDesignBlock/WebsiteDesignBlock";
import FigmaDesignBlock from "../FigmaDesignBlock/FigmaDesignBlock";
import FadeInOut from "../FadeInOut/FadeInOut";
import MenuModal from "../MenuModal/MenuModal";
import LatestArticlesBlock from "../LatestArticlesBlock/LatestArticleBlock";
import IndustryDesignBlock from "../IndustryDesignBlock/IndustryDesignBlock";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import OtherArticles from "../OtherArticles/OtherArticles";
import ArchiveBlock from "../ArchiveBlock/ArchiveBlock";
import SideBanner from "../SideBanner/SideBanner";
import TestimonialsBlock from "../TestimonialsBlock/TestimonialsBlock";
import './App.scss';

const App = () => {

    // initialize client for data fetching
    const client = new QueryClient({defaultOptions: {
        queries: {
            suspense: true,
        }
        }});

    // State that indicates if modal menu is open.
    const [isModalOpen, setIsModalOpen] = useState(false);
    // State that indicates if page is scrolled down from top. Needed for "back to top"
    // button to appear
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    // Function to scroll page back to its top
    const goToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

    // Hook for handlind scroll interaction
    useEffect(() => {
        const handleScroll = event => {
            const scrolled = window.scrollY;
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
        <>
            <QueryClientProvider client={client}>
                    <FadeInOut show={!isModalOpen} duration={150}>
                        <Suspense>
                            <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Header>
                            <PageTitle></PageTitle>
                            <TeasersBlock></TeasersBlock>
                            <Tutorials></Tutorials>
                            <WebsiteDesignBlock></WebsiteDesignBlock>
                            <EditorChoiceBlock></EditorChoiceBlock>
                            <FigmaDesignBlock></FigmaDesignBlock>
                            <LatestArticlesBlock></LatestArticlesBlock>
                            <IndustryDesignBlock></IndustryDesignBlock>
                            <section className="other-content">
                                <div className="container">
                                    <div className="white">
                                        <div className="other-content__inner row">
                                            <div className="col-lg-8 other-content__main">
                                                <OtherArticles></OtherArticles>
                                            </div>
                                            <div className="col-lg-4 other-content__sidebar">
                                                <ArchiveBlock></ArchiveBlock>
                                                <SideBanner></SideBanner>
                                                <TestimonialsBlock></TestimonialsBlock>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </Suspense>

                    </FadeInOut>
                    <FadeInOut show={isModalOpen} duration={500}>
                        <Suspense>
                            <MenuModal onCloseModal={setIsModalOpen} isModalOpen={isModalOpen}/>
                        </Suspense>
                    </FadeInOut>
                    <FadeInOut show={isScrolledDown && !isModalOpen} duration={500}>
                        <Suspense>
                            <ScrollToTop setIsScrolledDown={setIsScrolledDown} onClick={goToTop}></ScrollToTop>
                        </Suspense>
                    </FadeInOut>
            </QueryClientProvider>
        </>
    );
}

export default App;
