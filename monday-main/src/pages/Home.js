import React from 'react'
import img1 from "../images/background-2687925_1920.jpg";
import Cards from "../components/Cards";
import Cardstwo from "../components/Cardstwo";

const Home = () => {
    return (
        <div style={{ backgroundImage:`url(${img1})`, backgroundRepeat:"no-repeat" ,  }}>
            <Cards/>
            <Cardstwo />
        </div>
    )
}

export default Home
