import React from 'react';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef(); 
    }

    submitHandler = (e) => {
        e.preventDefault();
        // console.log(this.textInput.current.value);
        this.props.searchValueHandler(this.textInput.current.value);
    }

    handleKeyPress = (e) => {
        // console.log(this.textInput.current.value);
        if(e.charCode === 13){
            e.preventDefault();
            // console.log(this.textInput.current.value);
            this.props.searchValueHandler(this.textInput.current.value);
        } 
    }

    clickHandler = (e) => {
        this.props.onClickHandler(String(e.target.innerText.toLowerCase()));
    } 

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Navbar.Brand>Wynk Times</Navbar.Brand>

                    <Nav className="mr-auto">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link href="" onClick={(e) => this.clickHandler(e)}>Home</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="" onClick={(e) => this.clickHandler(e)}>Business</NavDropdown.Item>
                            <NavDropdown.Item href="" onClick={(e) => this.clickHandler(e)}>Entertainment</NavDropdown.Item>
                            <NavDropdown.Item href="" onClick={(e) => this.clickHandler(e)}>General</NavDropdown.Item>
                            <NavDropdown.Item href="" onClick={(e) => this.clickHandler(e)}>Health</NavDropdown.Item>
                            <NavDropdown.Item href="" onClick={(e) => this.clickHandler(e)}>Science</NavDropdown.Item>
                            <NavDropdown.Item href="" onClick={(e) => this.clickHandler(e)}>Sports</NavDropdown.Item>
                            <NavDropdown.Item href="" onClick={(e) => this.clickHandler(e)}>Technology</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                    </Nav>
                    
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                         ref={this.textInput} type="text" onKeyPress={(e) => this.handleKeyPress(e)}/>
                        <Button variant="outline-info" onClick={(e) => this.submitHandler(e)}>Search</Button>
                    </Form>
                    
                </Navbar>
            </>
        );
    }
}

export default Menu;