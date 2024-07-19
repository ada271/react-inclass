import React from "react";
import axios from "axios";

const Home = () => {
    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    //!GET-READ
    const getBilgiler = async () => {
        const res = await axios.get(url);
        console.log(res.data)
    };

    getBilgiler()
    return <div>Home</div>;
};

export default Home;
