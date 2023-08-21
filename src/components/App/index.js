import Header from "../Header";
import {QueryClient, QueryClientProvider} from "react-query";
import {Suspense, useEffect, useState} from "react";
import PageTitle from "../PageTitle";
import TeasersBlock from "../TeasersBlock";
import Tutorials from "../Tutorials";
import EditorChoiceBlock from "../EditorChoiceBlock";
import WebsiteDesignBlock from "../WebsiteDesignBlock";
import FigmaDesignBlock from "../FigmaDesignBlock";
import FadeInOut from "../FadeInOut";
import MenuModal from "../MenuModal";
import LatestArticlesBlock from "../LatestArticlesBlock";
import IndustryDesignBlock from "../IndustryDesignBlock";
import ScrollToTop from "../ScrollToTop";
import OtherArticles from "../OtherArticles";
import ArchiveBlock from "../ArchiveBlock";
import SideBanner from "../SideBanner";
import TestimonialsBlock from "../TestimonialsBlock";
import './style.scss';

const App = () => {

    const client = new QueryClient({defaultOptions: {
        queries: {
            suspense: true,
        }
        }});

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolledDown, setIsScrolledDown] = useState(false);

    const goToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});


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
