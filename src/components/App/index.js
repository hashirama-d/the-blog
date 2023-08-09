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

const App = () => {

    const client = new QueryClient({defaultOptions: {
        queries: {
            suspense: true,
        }
        }});

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <QueryClientProvider client={client}>
                {/*<Suspense>*/}
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
                        </Suspense>

                    </FadeInOut>
                    <FadeInOut show={isModalOpen} duration={500}>
                        <Suspense>
                            <HeaderMenuModal onCloseModal={setIsModalOpen}/>
                        </Suspense>
                    </FadeInOut>
                {/*</Suspense>*/}
            </QueryClientProvider>
        </>
    );
}

export default App;
