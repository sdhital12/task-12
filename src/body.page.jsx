import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const BodyPage = ()=>{
return (
    <>
    <Container fluid>
    
      <Row style={{ backgroundColor: 'rgb(204, 203, 193)' }}> 
        <Col lg ={7 }className="p-3">
        <h2>
        Trump’s legal team meets with special counsel as federal indictment in 2020 election interference 
     </h2>
     <p>CNN
 — 
Donald Trump’s defense lawyers and special counsel Jack Smith met Thursday in Washington, DC, without the former president’s team getting any guidance about timing of a possible indictment, sources familiar with the matter told CNN.

The meeting happened on the same day that the grand jury hearing evidence from the special counsel’s probe into election subversion efforts by Trump and his allies was seen at the federal courthouse.

</p>
        </Col>
        
        
        <Col lg={5}className="p-3">
        
        <img width='300px' height= '300px'src="figma-img.jpeg" />
        </Col>
        
      </Row>
      <Row className ='g-2' style={{ background:'#c0ae99' }}>
        
        <Col lg={4} className="d p-3" >
       
        <h5 className="mb-1">Special counsel brings more charges against Donald
             Trump</h5>
             <p style={{ fontSize:'10px' }}>By Tierney Sneed, Marshall Cohen and Jeremy Herb, CNN
Updated 9:52 PM EDT, Thu July 27, 2023</p>
             
             <div className="d-flex">
             <div >
             <p>
               CNN —
Special counsel Jack Smith expanded his classified documents case against former President Donald Trump, making significant new allegations that Trump and his employees attempted to delete Mar-a-Lago security footage sought by the grand jury investigating the mishandling of the government records.
 
             </p>
           
            </div>
            
        <div>
            <img width='200px' height='200px' src="https://static01.nyt.com/images/2023/07/27/multimedia/27dc-documents-Mar-2--hp-fzjl/27dc-documents-Mar-2--hp-fzjl-jumbo-v2.jpg?quality=75&auto=webpw"/>
        </div>
        </div>
        
        </Col>
        
        <Col lg={4}>
            


    <Card style={{ width:'430px',  background:'#c0ae99' }}>
      <Card.Body>
        <Card.Title>Trump ‘requeste’ deletion of security footage</Card.Title>
       
        <Card.Text>
          The indictment accuses Trump of being part of the effort to delete security footage from Mar-a-Lago after it was subpoenaed, saying that Trump “requested” that a resort employee delete footage in order “to prevent the footage from being provided to a federal grand jury.”
The newest defendant in the case places the former president in the middle of the attempts to delete the security footage. According to the indictment, De Oliveira told another Trump employee, who was director of IT at Mar-a-Lago, “that ‘the boss’ wanted the server deleted,” according to the indictment.

Justice Department  Storage Room.”
        </Card.Text>
        <Card.Link href="#">Read more..</Card.Link>
      
      </Card.Body>
    </Card>
        </Col>
        
    <Col >
    

    <Card
                        bg={"dark"}
                        key={'dark'}
                        text={'white'}
                        className="mb-2 shadow-lg border-0 rounded-sm p-3"
                    >
                        <Card.Header>
                            <h5 className="text-center font-weight-light my-4">Fill up below for our Newsletter</h5>
                        </Card.Header>

                        <Card.Body>
                            <Form >
                                <Form.FloatingLabel
                                    controlId="email"
                                    label="Name"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                       
                                        type="email" 
                                        name="email"
                                        placeholder="name@example.com"
                                        size="sm"
                                        
                                    />
                                    
                                </Form.FloatingLabel>
                                <span className="text-danger">
                                   * Name is required
                                </span>

                                <Form.FloatingLabel
                                    controlId="password"
                                    label="Email"
                                    className="mb-3"
                                >
                                    <Form.Control 
                                        type="password" 
                                        name="password"
                                      
                                        size="sm"
                                        required
                                    />
                                </Form.FloatingLabel>
                                <span className="text-danger">* emial required</span>

                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                   
                                    <Button size="lg" variant="danger" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
    </Col>

        

      </Row>
    </Container>

    </>
)
    
}

export default BodyPage;