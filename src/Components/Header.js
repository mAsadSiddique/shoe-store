import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return ( <
        div className = "Navbar" >
        <
        p >
        <
        b > Shoe Store < /b> <
        Link className = "links"
        to = "/" > Home < /Link> <
        Link className = "links"
        to = "/Product" > Product < /Link> <
        /p> <
        /div>
    );
}

export default Header;


// <Nav.Link ><Link className="links" to="/">Home</Link></Nav.Link>
// <Nav.Link ><Link className="links" to="Product" >Product</Link></Nav.Link>