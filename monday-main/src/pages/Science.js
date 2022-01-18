import React from 'react'
import { useQuery } from "react-query";

function Science() {
  const { isLoading, error, articles = ([],[
    articles._api_token = "DB6A520C73B3513661DEB6BC3C9C688F",
    articles._group = "Article",
    articles._action = "ArticleList",
    articles._from_no = "1",
    articles._limit = "12",
    articles._typ = "5"]) } = useQuery("article", () =>
    fetch("htpp://127.0.0.1:3009/api").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";
  if (error) return "Error!";


    return (
        <div>
            <h4 className="px-5 mt-4 "> Science </h4>
            <div className="container-flex">
   <div className="card px-5 pt-5 ">
            <div className=" card-body row no-gutters">
            <div className="col-auto">
                <img src= {JSON.stringify(articles.file)} class="img-fluid" alt="" placeholder={JSON.stringify(articles.nice_name)}></img>
            </div>
            <div className="col">
                <div className="card-block ">
                    <h6 className="p-1 mb-1 bg-light text-dark text-end"> {JSON.stringify(articles.typ)} - {JSON.stringify(articles.datum)}</h6>
                    <h4 className="card-title">{JSON.stringify(articles.title)}</h4>
                    <p className="card-text">{JSON.stringify(articles.preamble)}</p>
                      
                </div>
            </div>
        </div>
  </div>
  </div>    
        </div>
    )
}

export default Science
