import React from 'react'
import { Link } from "react-router-dom";



const About = () => {
    return (
        <div>
                
    <ul className=" align-items-left d-flex justify-content-end font-bold px-5 ">
    <li ><Link to="/"><u>Back to Home</u></Link></li>
   </ul>
        
         <div className="container px-4 py-4 " >
             
        <div className='row'>
         <div className='col'  ></div>     
          
         
              
          
         <div className='container '> 
         <h4 className="px-5 mt-4 "> About </h4>
           
           <p className=" small px-5 text-wrap text-left text-justify ">
           Welcome to Monday, the leading Public Relations and Communications agency in the Nordic culture field.<br></br>
           <br></br>

The agency has a long-term commitment to arts & science, promoting art, literature, film, music, stage and science throughout Denmark, Finland, Iceland, Norway and Sweden.<br></br> <br></br>

Our specialty is bringing culture and business together with great sensitivity to our client's habitat and context. We believe in a balanced and integrated media strategy based on traditional channels as well as digital media such as social networks, blogs and webcasts to achieve optimal media presence.<br></br><br></br>

Monday also provides Public Affairs, Corporate Positioning, Crisis Management, Media Training, Corporate Social Responsibility, Opinion Research and Organisational Communication services.<br></br><br></br>

Camilla Nasiell, CEO<br></br><br></br>

The company<br></br><br></br>

Monday was founded in 2002 by Camilla Nasiell and Stellan Forsberg. Mrs Nasiell has a Master of Journalism and 15 years of experience of communication in TV, film and media.<br></br><br></br>

Mr Forsberg has 15 years of experience of investment banking and finance. He is the founder and former CEO of MFEX (Mutual Funds Exchange), Europe’s largest independent marketplace for mutual funds. Mr Forsberg graduated in business administration at the University of Stockholm and received his management training at IMD, Lausanne.<br></br><br></br>

Monday engages a handful of experts in various cultural and science fields throughout the Nordic. Each assignment is given an optimal project team for top quality and personal fulfilment.<br></br><br></br>

           </p>
           </div>
        </div>
        
              
        </div>
</div>
    )
}

export default About