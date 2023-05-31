import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Button, Alert,Breadcrumb, Card, Form} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          
        <Form className='mb-3'>
        <Row>
            <Col md>
              <Form.Group controlId='formEmail'>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder='Example@email.com'/>
              <Form.Text  style={{color:'white'}}>
                We'll never share your email adress
              </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder='Password'/>
              <Form.Text style={{color : 'white'}}>Please enter a valid password</Form.Text>
              </Form.Group>
            </Col>
            <Button variant="secondary" type='submit' style={{marginTop : '10px'}} className='mb-3'>Login</Button>
          </Row>
          
          
        </Form>
        <Card className='mb-3' style={{ color: "red"}}>
          <Card.Img src='http://picsum.photos/200/50'/>
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of React Bootstrap Cards</Card.Text>
            <Button variant='primary'>read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <Breadcrumb.Item>Test1</Breadcrumb.Item>
          <Breadcrumb.Item>Test2</Breadcrumb.Item>
          <Breadcrumb.Item >Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant='success'>This is an alert</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
