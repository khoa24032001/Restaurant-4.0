import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand} from 'reactstrap';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { Modal, ModalBody } from 'reactstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import axios from 'axios';
class PickFood extends Component {
    constructor(props) {
        super(props);
        this.state = {

            foods : {food_name: "HongPhuc", price:100},
            food_list:[],
            nums_item_buy: 0,
            cart: [],
            foods_display: [{food_name: "HongPhuc", price:100}],
            item_open: [{food_name: "HongPhuc", price:100}],
            nums_item_open: 0,
            isModalOpen: false
        }
     }
      render(){
        //   const not_Found = () => {
        //       if (this.state.food_display.length === 0) 
        //       return (
        //           <Col md="12">
        //             <div className="not-found"> Không tìm thấy kết quả</div>
        //           </Col>
        //       );
        //   }
          const food_list = this.state.foods_display.map(food => {
              const price = food.price * 1000;
              return(
                <Col lg="2" md="3" sm="4" border-radius={55}>
                <Card className="food-item">
                <img className="food-img" width="91.98px" height="90px" src="/assets/images/food_example.png" alt = "Xem hồ sơ bệnh án"></img>
                <CardBody>
                <CardTitle tag="h5" className="food-text">{food.food_name}</CardTitle>
                <CardSubtitle tag="h6" className="food-title">500mg, Viên sủi</CardSubtitle>
                <CardText className="food-price-add">
                    <span className="food-price"> {price.toLocaleString('vi-VN')}đ </span>
                    <span className="food-add-item"> 
                        <img className="food-add-item-img" 
            //                onClick={(e) => {this.toggleModal(); this.setItemModal(food, e)}} 
                            width="35px" height="35px" src="/assets/images/add-item.png" alt="Add Item"/> 
                    </span>
                </CardText>     
                </CardBody>
                </Card>
                </Col>
              )
          });

          return(
            <Col left={0.25} width={0.75}>
            <Col>
              <Row className="navbar">
            <Col xs={3} display= 'block' width= {1000 } padding= {30 } left={0.2}       >
                <Row>
                Chọn món 
                        <Input type="text" innerRef={(input) => this.search_item = input} />
                                 
                </Row>
                <Row> 
                    <Button color="blue"> Tất cả</Button>
                    <Button>Món ăn</Button>
                    <Button> Thức ăn</Button>
                    <Button> Combo</Button>
                </Row>
            </Col>
            <Container>
                    <Row>
                        {food_list}  
                    </Row>
                </Container>
              </Row>
              {/* <Col classname="cart">
                    <HeaderCart customerName="HongPhuc" Role="Khách hàng"/>   
                    <FooterCart total={123456}/>
                  </Col> */}
            </Col>
            </Col>
          )
      }
}

export default PickFood;
  class HeaderCart extends Component{
      render(){
              const {customerName, Role}=this.props;
              return( 
                              
                 <CustomerInfo props={this.props}/>
    )
      }
  };
  class CustomerInfo extends Component{
      render(){
              const {customerName, Role}=this.props;
              
              return (
                  <h5> Người dùng: {customerName}
                  Vai trò: {Role}</h5>
              )
      }
  };
  class FooterCart extends Component{
      render(){
              const {total}=this.props;
              return (
                  <Container>
                  Tổng: {total}
                  <Button txt="Thanh toán" path='pay'/>
                  </Container>
              )
      }
  };
  