import React  from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Search from './components/Search';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Art from "./pages/Art";
import Literature from "./pages/Literature";
import Stage from "./pages/Stage";
import Film from "./pages/Film";
import Science from "./pages/Science";
import Music from "./pages/Music";




const App = () => {

  return (

   
    <div className="App"  >
    
    
      
     <Router>
     <Navbar />
     
     <div className='overlay align-items-center d-flex justify-content-center pt-5'>
     <Search /> </div>

     
  


         
              
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

     
     

     <Footer/>

     
     

     
     
     
     
     
     
     </div>

     
     

     

     
   
     
    
    
  );
}



export default App;