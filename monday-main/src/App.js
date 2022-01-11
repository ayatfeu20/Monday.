import React from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Art from "./pages/Art";
import Literature from "./pages/Literature";
import Stage from "./pages/Stage";
import Film from "./pages/Film";
import Science from "./pages/Science";
import Music from "./pages/Music";
import Footer from "./components/Footer/Footer";

var param = {};
param._api_token = "DB6A520C73B3513661DEB6BC3C9C688F";
param._group = "Article";
param._action = "ArticleGet";
param._from_no = "1",
param._limit = "12",
param._typ = "2"


class App extends React.Component{
  async postData(){
    
  fetch('http://127.0.0.1:3009/api', {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(param) })
}




  /*constructor(props){
  super (props);
  this.state ={apiResponse:""};
  }

  callApi(){
    fetch("http://127.0.0.1:3009/api")
    .then(res => res.text())
    .then(res => this.setState ({apiResponse: res}));

  }

  componentWillMount(){
    this.callApi();
  }*/


render(){
  return (


/*function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []); */



  
    
    <div className="App"  >
    
     
      
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

     
     <p>{this.postData}</p>

     
     
     
     
     <Footer />
     
     </div>

     
     

     

     
   
     
    
    
  );
}
}

export default App;