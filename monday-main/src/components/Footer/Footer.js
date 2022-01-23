import React from 'react';
import "./Footer.css"


const Footer = () => {
  return(
      <div className='main-footer bg-info bg-gradient bg-opacity-50'>
          
          <div className='container'>
              <div className='row'>
                  {/* column1 */}
                  <div className='col'>
                      <h4>Contact</h4>
                      <ul className='list-unstyled'>
                          <li>Address: Floragatan 4B / Villa Sandrew</li>
                          <li>SE-114 31 Stockholm, Sweden</li>
                          <li>Telephone: +46 (0)8 661 90 94</li>
                          <li>hello@mondayrelations.se</li>
                      </ul>
                    </div>
                  {/* column2 */}
                  {/* <div className='col'>
                      <h4>About</h4>
                      <ul className='list-unstyled'>
                          <li>STUFFF</li>
                          <li>OYTHER STFF</li>
                          <li>GUD STUFF</li>
                      </ul>
                  </div> */}
                  {/* column3 */}
                  {/* <div className='col'>
                      <h4>Stuff</h4>
                      <ul className='list-unstyled'>
                          <li>WELL ANOTHER COLUMN</li>
                          <li>OTHER STUFF</li>
                          <li>COOOLLAASdasd</li>
                      </ul>
                  </div> */}
              </div>
              <hr />
              <div className='row '>
                  <p className='col-sm'>
                      &copy;{new Date().getFullYear()} | All right reserved | Terms Of Service | Privacy
                  </p>
              </div>
          </div>
      </div>
  )
}

export default Footer;