import React from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cards from './components/Cards';
import Cardstwo from "./components/Cardstwo";
import Home from "./pages/Home";
import About from "./pages/About";
import Art from "./pages/Art";
import Literature from "./pages/Literature";
import Stage from "./pages/Stage";
import Film from "./pages/Film";
import Science from "./pages/Science";
import Music from "./pages/Music";
import Footer from "./components/Footer/Footer";



function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []); 

  return (
    <div className="App">
     
      
     <Router>
     <Navbar />
     <Switch>
     <Route  exact path="/" component={Home} /> 
     <Route  exact path="/about" component={About} />
     <Route  exact path="/art" component={Art} />
     <Route  exact path="/literature" component={Literature} />
     <Route  exact path="/stage" component={Stage} />
     <Route  exact path="/film" component={Film} />
     <Route  exact path="/science" component={Science} />
     <Route  exact path="/music" component={Music} />
     </Switch>
     </Router>

     

     <Cards />
     <Cardstwo />
     <Footer />
     
     </div>

     
     

     

     
   
     
    
    
  );
}

export default App;