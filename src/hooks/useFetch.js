import { useEffect, useState } from "react";

export const useFetch = (url) => {
     const [state, setState] = useState({ data: null, loading: true, error: null });

     useEffect(() => {
          fetch(url)
               .then((res) => { return res.json() })
               .then((data) => {
                    setState({
                         data,
                         loading: false,
                         error: null
                    });
               })
               .catch(err => { return err });
     }, [url]);

     return state;
};