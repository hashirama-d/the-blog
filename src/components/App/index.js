import Header from "../Header";
import {QueryClient, QueryClientProvider} from "react-query";
import {Suspense} from "react";
import PageTitle from "../PageTitle";

const App = () => {

    const client = new QueryClient({defaultOptions: {
        queries: {
            suspense: true,
        }
        }});

    return (
        <>
            <QueryClientProvider client={client}>
                <Suspense>
                    <Header></Header>
                    <PageTitle></PageTitle>
                </Suspense>
            </QueryClientProvider>
        </>
    );
}

export default App;
