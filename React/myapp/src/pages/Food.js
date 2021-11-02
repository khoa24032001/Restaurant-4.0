
import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Modal, ModalBody } from 'reactstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import axios from 'axios';
class Food extends Component{
    // const {name}=this.props;
  render(){
    return(
    <Col lg="2" md="3" sm="4">
                  <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="src/phuc.png" /> */}
                    <Card.Body>
                      <Card.Title>"HOngphuc"</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      
                      <Button variant="primary">+</Button>
                    </Card.Body>
                  </Card>
              </Col>)
  }
  }

  export default Food;