import React from 'react';
import styled from 'styled-components';

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 300px;     
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: fff; /*  */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 20px;
`;

class SideNav extends React.Component {
    
    render() {
           return(
            <StyledSideNav>
                
            </StyledSideNav>
            
        );
    }
}


export default class Sidbar extends component {
    render() {
        return (
            <SideNav>
                <div className= "alert alert-dark" >
      <h6 className="text-center ">Use our serach engine here</h6>
    <form className="d-flex input-group w-auto   ">
      <input type="search"
        className="form-control rounded bg-light "
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <i className="fas fa-search"></i>
      </span>
    </form>
    </div>
                
            </SideNav>
            
            
        );
    }
}

