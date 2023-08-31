import {useQuery} from "react-query";

const useFetch = (url, queryKey) => {
    return useQuery(queryKey, () =>
        fetch(url)
            .then((resp)=> resp.json()));
}

export default useFetch;