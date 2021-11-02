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
            //const price = food.price * 1000;
            return (
                <Card>
                    {/* <img className="drug-img" src="./logo.svg" alt = "Xem hồ sơ bệnh án"></img> */}
                    <CardBody>
                        <CardTitle tag="h5">Gà rán (M)</CardTitle>
                        <CardSubtitle tag="h6"> Gà texas</CardSubtitle>
                        <CardText>
                            <Button>Xem chi tiết </Button>
                            <Button onClick={this.state.cart.push(food)}>
                                {" "}
                                Thêm vào giỏ hàng{" "}
                            </Button>
                        </CardText>
                    </CardBody>
                </Card>
            );
        });
        const cart_food_list = this.state.cart.map((food) => {
            //const price = food.price * 1000;
            return (
                <Container className="padding10">
                    <Card className='cartItemContent'>
                        {/* <img className="drug-img" width="91.98px" height="90px" src="/assets/images/drug_example.png" alt = "Xem hồ sơ bệnh án"></img> */}
                        
                        
                        <div className='img'></div> 
                        <Row className="incartItem">  Gà rán (M) 
                        <div className='qty'> <Button>-</Button> 3 <Button>+</Button>  </div></Row>
                        <Row>
                        <Input className="note" name="note" type="text"></Input><Button className='del'>Del</Button>
                        </Row>
                        {/* <CardBody> */}
                            {/* <CardTitle tag="h5">Gà rán (M)</CardTitle> */}
                            {/* <CardSubtitle tag="h6"> Kích thước S</CardSubtitle> */}
                            {/* <CardText> */}
                                {/* <CardImg src="react-icons/fa/FaTable" /> */}
                                
                                {/* <Input name="note" type="text" defaultValue="Add Note"></Input> */}
                                {/* <img
                                    onClick={this.state.cart.push(food)}
                                    width="35px"
                                    height="35px"
                                    src="./logo192.png"
                                    alt="Chọn mua"
                                /> */}

                            {/* </CardText> */}
                        {/* </CardBody> */}
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
            <h5>
                {" "}
                Người dùng: {customerName}
                Vai trò: {Role}
            </h5>
        );
    }
}
class FooterCart extends Component {
    render() {
        const { total } = this.props;
        return (
            <Container>
                Tổng: {total}
                <Button txt="Thanh toán" path="pay" />
            </Container>
        );
    }
}

// <Col lg="2" md="3" sm="4">

class FoodCard extends Component {
    render() {
        return (
            <MDBCard className="CARD" style={{ maxWidth: "22rem" }}>
                <MDBCardBody>
                    <MDBCardTitle>Gà chiên giòn</MDBCardTitle>
                    <MDBCardText>Ăn tại chỗ</MDBCardText>
                    <Row>
                        {" "}
                        <MDBBtn>+</MDBBtn> 3 <MDBBtn>-</MDBBtn>
                    </Row>
                </MDBCardBody>
            </MDBCard>
        );
    }
}
