import React from 'react';
import styled from 'styled-components';


const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 250px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 11.7em;      /* Stay at the top */
    background-color: #ffff; 
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends React.Component {

    render() {
        return (
        <StyledSideNav>
      
         
          
            <p className = "small">
            <ui className="list-unstyled text-center">
              <li className="">Contact</li>
              <li>Address: Floragatan 4B / Villa Sandrew </li>
              <li>SE-114 31 Stockholm, Sweden</li>
              <li>Telephone: +46 (0)8 661 90 94</li>
              <li>hello@mondayrelations.se</li>
            </ui>
            </p>
                 
        </StyledSideNav>
        );
    }

}

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav>
              

            </SideNav>
        );
    }
}