import {useState, useEffect} from "react";
import axios from "axios";

const CryptoData = () => {
    // data: represents our data, setdata sets the data we are pulling from the api
    const [data, setData] = useState([]);
    // collect user data, empty string
    const baseUrl = "https://www.cryptingup.com/api";
    
    // Make a request to all exchanges
    useEffect(() => {
        axios.get(`${baseUrl}/exchanges`).then(res => {
            setData(res.data.exchanges);
        });
    }, []);
   

    return (
        <div>
            <h1>Data from my API</h1>
            {data.map(x => <li key={x.exchange_id}>{x.name}</li>)}
            
            {/* List specific data for the 3 exchanges  */}
            <h1>Single Post data</h1>
            <h3>Exchange Name: </h3>
            <p> </p>
        </div>  
    )
};

export default CryptoData;