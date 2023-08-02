import { Container, Form, Nav, Navbar } from "react-bootstrap"

const HomeMenu = () => {
    return (
        <>
        <Container fluid> 
        
        <div className="bg-danger text-white p-2" >            
           
        <p>Welcome to my figma page</p>

            
        </div>

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">Menu</Nav.Link>
            <Nav.Link href="#features" className="text-white">Menu</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">Menu</Nav.Link>
          </Nav>
          
          <Form style={{ width:'350px' }}>
            <Form.Control
              type="search"
              placeholder="Search.."
              className="me-2"
              aria-label="Search"
            />
          
          </Form>
           <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Login </Nav.Link>
            <Nav.Link href="#features" className="text-white">Register</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        
            
        </Container>
        </>
    )
}


export default HomeMenu;