import { useState } from "react";
import { useEffect } from "react";
// import React from "react";
let Fetch = async () => {
    // eslint-disable-next-line
    let [apiData, setApiData] = useState();
    // eslint-disable-next-line
    const [items, setItems] = useState([]);
    // eslint-disable-next-line
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=NN2ZC5810KIJHN71";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                setDataIsLoaded(true);
            });
    }, []);
}
export default Fetch