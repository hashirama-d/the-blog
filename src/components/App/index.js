import Header from "../Header";
import {QueryClient, QueryClientProvider} from "react-query";
import {Suspense, useState} from "react";
import PageTitle from "../PageTitle";
import TeasersBlock from "../TeasersBlock";
import Tutorials from "../Tutorials";
import EditorChoiceBlock from "../EditorChoiceBlock";
import WebsiteDesignBlock from "../WebsiteDesignBlock";
import FigmaDesignBlock from "../FigmaDesignBlock";
import FadeInOut from "../FadeInOut";
import HeaderMenuModal from "../Header/HeaderMenuModal";
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
    const [isScrolledDown, setIsScrolledDown] = useState(true);


    return (
        <>
            <QueryClientProvider client={client}>
                    <FadeInOut show={!isModalOpen} duration={500}>
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
                            {/* подумай над тим, чи варто винести це в окремий компонент. */}
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

                            {/*<p>{String(isScrolledDown)} {String(isModalOpen)}</p>*/}
                        </Suspense>

                    </FadeInOut>
                    <FadeInOut show={isModalOpen} duration={500}>
                        <Suspense>
                            <HeaderMenuModal onCloseModal={setIsModalOpen}/>
                        </Suspense>
                    </FadeInOut>
                    <FadeInOut show={isScrolledDown && !isModalOpen} duration={500}>
                        <Suspense>
                            <ScrollToTop setIsScrolledDown={setIsScrolledDown}></ScrollToTop>
                        </Suspense>
                    </FadeInOut>
            </QueryClientProvider>
        </>
    );
}

export default App;
