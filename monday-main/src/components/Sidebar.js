import React from 'react';
import styled from 'styled-components';
import Search from '../components/Search';


const StyledSideNav = styled.div`   
    position: fixed;     
    height: 100%;
    width: 250px;     
    z-index: 1;      
    top: 8.4em;      
    background-color: #ffff; 
    overflow-x: hidden;     
    padding-top: 10px;
`;


class SideNav extends React.Component {

    render() {
        return (
        <StyledSideNav>
             
          
            <p className = "small border mt-3 mx-2">
            <ui className="list-unstyled text-center">
              <li className="bg-info text-light">Contact</li>
              <li>Address: Floragatan 4B / Villa Sandrew </li>
              <li>SE-114 31 Stockholm, Sweden</li>
              <li>Telephone: +46 (0)8 661 90 94</li>
              <li>hello@mondayrelations.se</li>
            </ui>
            </p>

            <Search/>

                 
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