import {useState, useEffect} from "react";
import axios from "axios";

const CryptoData2 = () => {
    // data: represents our data, setdata sets the data we are pulling from the api
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

     // Make a request to all exchanges
    useEffect(() => {
        axios.get('https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=10&start=1&end=1').then(res => {
            setData(res.data.markets);
        });
        axios.get('https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=10&start=1&end=1').then(res => {
            setData2(res.data.markets);
    });
    axios.get('https://www.cryptingup.com/api/exchanges/COINBASE/markets?size=10&start=1&end=1').then(res => {
        setData3(res.data.markets);
});
    }, []);
   

    return (
        <div>
            <h1>Data from my API</h1>
        <h2>Prices:    {data3.map((x, i) => <li key={i}>{x.price} </li>)}</h2>
            <h2> symbol:{data.map((x, i) => <li key={i}>{x.symbol} </li>)}</h2>
            <h2> Exchange</h2> {data2.map((x, i) => <li key={i}>{x.exchange_id} </li>)}
            {/* List specific data for the 3 exchanges  */}
           
            <p> </p>
        </div>  
    )
};

export default CryptoData2;