import React from 'react'
import { useState, useEffect } from "react";


function Home() {
 
  const [articles , setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   
  
  
  

  useEffect(() => {
    var articles = {}; 
    articles._api_token = "DB6A520C73B3513661DEB6BC3C9C688F";
    articles._group = "Article";
    articles._action = "ArticleList";
    articles._from_no = "1";
    articles._limit = "12";
    articles._typ = "0";

    fetch('http://127.0.0.1:3009/api', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articles) })
    
      .then((res) => res.json())
      .then(
        (article) => {
          setData(article);
          setLoading(false);
        
        },
        (error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        }
      );
    /////////////////////////
    // .then((response) => {
    //   if (response.ok) {
    //     return response.json();
    //   }
    //   throw response;
    // })
    // .then((res) => {
    //   setData(res);
    // })
    // .catch((error) => {
    //   console.error("Error fetching data: ", error);
    //   setError(error);
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
  }, []);

  if (loading) return "Loading {articles}";
  if (error) return "Error!";
  const articlelist = () => {
    
    if (articles._action === 1) {
    return (articlelist === 'Art');}
    if (articles._action === 2) {
    return (articlelist === 'Literature');}
    if (articles._action === 3) {
    return (articlelist === 'Stage');}
    if (articles._action === 4) {
    return (articlelist === 'Film');}
    if (articles._action === 5) {
    return (articlelist === 'Science');}
    if (articles._action === 6){ 
    return (articlelist === 'Music');}
      }
  
  

  


    return (
             
        
        <div className='pb-4'>
           {
           articles.map((article) => ( 
                <div className="container pt-2">
                  <div className='row'>
                  
         <div className='col'  ></div>     
          <div className="align-items-center d-flex justify-content-center "> 
   <div className="card px-4 pt-2 m-1 w-75 ">
            <div className=" card-body row no-gutters">
            <div className="col-auto">
            
            <img src={`../upload/images/${article.file}.jpg`} alt="" />
            </div>
            <div className="col">
                <div className="card-block ">

                               
                      
                    <h6 className="p-1 mb-1 bg-dark bg-opacity-25 text-dark text-end"> {articlelist} - {article.datum}</h6>
                   
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.preamble}</p>
                      
                </div>
            </div>
        </div>
  </div>
  </div> 
  </div>
  </div>   
                ))
            } 




           
        </div>
        
    )
}

export default Home

              
                    

    

