import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const NavBar = (props) => {

    const buttonStyle ={
        textDecoration:'none',
        color:'white'
    }

        return (
            <Navbar bg="primary" expand="dark" variant="outline-light" sticky="top">
                <Navbar.Brand >
                    <Link to="/" style={buttonStyle}> {props.title} </Link>
                    </Navbar.Brand>
                <Nav>
                   
                    <Link to="/about" style={buttonStyle}>About</Link>
                   
                </Nav>
            </Navbar>
        )
 
}

NavBar.defaultProps = {
    title : "Learning React"
}

NavBar.propType = {
    title: PropTypes.string.isRequired
}

export default NavBar
