import React,{ useState, useEffect } from 'react'
import axios from "axios";

function Music() {
  const [articles = ({},{
    _api_token : "DB6A520C73B3513661DEB6BC3C9C688F",
    _group : "Article",
    _action : "ArticleList",
    _from_no : "1",
    _limit : "12",
    _typ : "6"}), setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      await axios("http://127.0.0.1:3009/api").then(
        (res) => {
          setArticles(res.articles);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching data: ", error);
          setError(error);
        }
      );
    } catch (e) {
      console.log(e);
    }
    
  };

  if (loading) return "Loading...";
  if (error) return "Error!";

    return (
        <div>
            <h4 className="px-5 mt-4 "> Music </h4>
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

export default Music
