import React from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"
import Icon from "./Icon.png"
import "./navCSS.css"

function NavBarComp() {

    const styles = {
        noPadding: {
            padding: 0
        },
        bgColor: {
            backgroundColor: "white" //gold

        },
        goldText: {
            color: "black " //scarlet
        },
        imgSize: {
            width: "200px",
            marginLeft: "20px",
            marginRight: "50px"
        }

    }

    return (
        <div className="container-fluid" style={styles.noPadding}>

            <nav className="navbar message justify-content-center">
                <strong>Need a question answered right away?  Call Mike Lapi Now 555-5555</strong>

            </nav>



            <Navbar className="noPaddingLow" style={styles.bgColor} expand="lg">
                <Navbar.Brand href="#home" className="noPaddingLow"><img src={Icon} alt="Brand Logo" style={styles.imgSize}></img></Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={styles.goldText}>Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" >Request a Quote!</button>
            </Navbar>
        </div>
    )
}
export default NavBarComp