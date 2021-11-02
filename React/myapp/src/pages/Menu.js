import React, { Component } from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { Modal, ModalBody } from "reactstrap";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
} from "mdb-react-ui-kit";
import { FoodOrdData } from "./FoodData";
class PickFood extends Component {
    constructor(props) {
        super(props);
        this.state = FoodOrdData;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.adjustItem = this.adjustItem.bind(this);
        //     this.addDrug = this.addDrug.bind(this);
    }

    addItem() {
        this.setState({
            nums_item_open: this.state.nums_item_open + 1,
        });
    }

    adjustItem(idx, more) {
        const newCart = this.state.cart;
        if (more) {
            newCart[idx].num++;
        } else {
            newCart[idx].num++;
        }
        this.setState({
            cart: newCart,
        });
    }

    addFood(food) {
        const newCart = this.state.cart;
        //const item = this.state.currentFood;

        newCart.push(food);
        this.state.cart = newCart;
        //  this.setState({
        //      carts: newCart
        //  })
        console.log(this.state)
    }

    handleSubmit() {
        const search = this.state.food_list.filter((food) => {
            return this.search_item.value;
        });
        this.setState({ food_display: search });
    }

    //  componentDidMount() {
    //              this.setState({ drugs: drugs.drugs,
    //                      drugs_display: drugs.drugs,
    //                  currentFood: {}});
    //    };

    render() {
        const food_list = this.state.food_display.map((food) => {
            return (
                <div className="containCard">

                <Card className="foodCard">
                        <h5> Gà rán (M)</h5>
                        <h6> Giá tiền 100.000</h6>
                        <Button className="infobtn">Xem chi tiết </Button>
                            <Button className="addbtn">Thêm vào giỏ hàng</Button>
                        
                </Card></div>
            );
        });
        const cart_food_list = this.state.cart.map((food) => {
            //const price = food.price * 1000;
            return (
                <Container className="padding10">
                    <Card className='cartItemContent'>
                         {/* <img width="91.98px" height="90px" src={FaSearch} alt = "Xem hồ sơ bệnh án"/> */}
                        
                        
                        <div className='img'></div> 
                        <Row className="incartItem">  Gà rán (M) 
                        {/* TODO action button to update cart */}
                        <div className='qty'> <Button onClick={this.addFood}>-</Button> 3 <Button>+</Button>  </div></Row>
                        <Row>
                        <Input className="note" name="note" type="text"></Input><Button className='del'>Del</Button>
                        </Row>
                    </Card>
                </Container>
            );
        });

        return (
            <Row className="screen">
                <Col className="MenuCard">
                    <Row>
                        <Button className="type-button"> Tất cả</Button>
                        <Button className="type-button">Món ăn</Button>
                        <Button className="type-button"> Thức ăn</Button>
                        <Button className="type-button"> Combo</Button>
                    </Row>

                    <Row>{food_list}</Row>
                </Col>
                <Col className="cart">
                    <HeaderCart />
                    {cart_food_list}
                    <FooterCart />
                </Col>
            </Row>
        );
    }
}

export default PickFood;
class HeaderCart extends Component {
    render() {
        const { customerName, Role } = this.props;
        return <CustomerInfo props={this.props} />;
    }
}
class CustomerInfo extends Component {
    render() {
        const { customerName, Role } = this.props;

        return (
            <h6>
                <Row> Người dùng: {customerName}
               </Row>
               <Row> Vai trò: {Role}</Row>
            </h6>
        );
    }
}
class FooterCart extends Component {
    render() {
        const { total } = this.props;
        return (
            <Container>
                Tổng: 100.000
                <Button txt="Thanh toán" path="pay" />
            </Container>
        );
    }
}

