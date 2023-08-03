import Header from "../Header";
import {QueryClient, QueryClientProvider} from "react-query";
import {Suspense} from "react";

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
                </Suspense>
            </QueryClientProvider>
        </>
    );
}

export default App;
