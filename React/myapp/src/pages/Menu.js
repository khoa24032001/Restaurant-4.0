import React, { Component } from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { Modal, ModalBody } from 'reactstrap';
import { FoodOrdData } from "./FoodData";
class PickFood extends Component {
    constructor(props) {
        super(props);
        this.state = FoodOrdData;
        this.state.isModalOpen=false;
        this.state.donePay=false;
        this.togglePay=this.togglePay.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addItem = this.addItem.bind(this);
        this.adjustItem = this.adjustItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.info=this.info.bind(this);
        
        //     this.addDrug = this.addDrug.bind(this);
    }
    info(){
        console.log(this.state);
    }
    addItem(item) {
        this.setState({
            cart: this.state.cart.push({ food: item, num: 1 })
        });
        this.total();
    }
    rmvItem(food) {
        const newCart = this.state.cart.filter((item) => item != food);
        this.setState({
            cart: newCart,
        });
        this.total();
    }
    adjustItem(foodfix, more) {
        const A = foodfix;
        if (more) A.num++;
        else A.num--;
        const newcart = this.state.cart.map((food) => {
            if (food == foodfix) return A;
            else return food;
        });
        this.setState({
            cart: newcart,
            
        });
        this.total();
    }

    addFood(food) {
        const exist = this.state.cart.filter(
            (item) => item.food.food_name == food.food_name
        );
        if (exist.length > 0) {
            this.adjustItem(exist[0], true);
        } else {
            this.setState({
                carts: this.state.cart.push({ food: food, num: 1 }),
                
            });
        }
        
        this.total();

        console.log(this.state);
    }

    handleSubmit() {
        const search = this.state.food_list.filter((food) => {
            return this.search_item.value;
        });
        this.setState({ food_display: search });
    }
    search(type) {
        this.setState({
            food_display: this.state.food_list.filter(
                (food) => food.type == type
            ),
        });
    }
    showAll() {
        this.setState({
            food_display: this.state.food_list,
        });
    }
    total() {
        
        const sum=this.state.cart.reduce(
            (total, item) => total + item.food.price * item.num,0
        );
        this.setState({totalCost:sum});
    }
    
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    togglePay() {
        this.setState({
          donePay: !this.state.donePay
        });
        this.state.cart=[];
        this.total();
    }

    componentDidMount() {
        this.setState(FoodOrdData);
        this.setState({
            food_display: this.state.food_list,
        });
        this.total();
    }

    render() {
        const food_list = this.state.food_display.map((food) => {
            return (
                <div className="containCard">
                    <Card className="foodCard">
                        <Row>
                            <Col>
                            <img className='menuFoodImg' src="https://i.imgur.com/xZYkts5.jpg" />
                            </Col>
                            <Col><div className='menuFoodName'> {food.food_name}</div>
                        <div className='menuFoodPrice'> Giá tiền : {food.price}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Button className="infobtn" onClick={(e)=>{this.setState({currentFood:food}); this.toggleModal()}}>Xem chi tiết </Button>
                        <Button
                            className="addbtn"
                            onClick={(e) => {
                                this.addFood(food);
                            }}
                        >
                            Thêm vào giỏ hàng
                        </Button>
                        </Row>
                        
                        
                    </Card>
                </div>
            );
        });
        const cart_food_list = this.state.cart.map((foodItem) => {
            //const price = food.price * 1000;
            return (
                <Container className="padding10">
                    <Card className="cartItemContent">
                        {/* <img width="91.98px" height="90px" src={FaSearch} alt = "Xem hồ sơ bệnh án"/> */}

                        <img className='menuFoodImg' src="https://i.imgur.com/xZYkts5.jpg" />
                        <a className="singleCost">{foodItem.food.price}</a> 
                        <Row className="incartItem">
                            {" "}
                            {foodItem.food.food_name}
                            {/* TODO action button to update cart */}
                            <div className="qty">
                                {" "}
                                <Button className='subCartItem'
                                    onClick={(e) => {
                                        this.adjustItem(foodItem, false);
                                    }}
                                >
                                    -
                                </Button>{" "}
                                {foodItem.num}{" "}
                                <Button className='addCartItem'
                                    onClick={(e) => {
                                        this.adjustItem(foodItem, true);
                                    }}
                                >
                                    +
                                </Button>{" "}
                            </div>
                            <a className="totalMoney">{foodItem.food.price*foodItem.num}</a>
                        </Row>
                        <Row>
                            <Input
                                className="note"
                                name="note"
                                type="text"
                            ></Input>
                            <Button
                                className="del"
                                onClick={(e) => {
                                    this.rmvItem(foodItem);
                                }}
                            >
                                Del
                            </Button>
                        </Row>
                    </Card>
                </Container>
            );
        });

        return (
            <Row className="screen">
                <Col className="MenuCard">
                    <Row>
                        <Button
                            className="type-button"
                            onClick={(e) => {
                                this.showAll();
                            }}
                        >
                            {" "}
                            Tất cả
                        </Button>
                        <Button
                            className="type-button"
                            onClick={(e) => {
                                this.search("DoAn");
                            }}
                        >
                            Món ăn
                        </Button>
                        <Button
                            className="type-button"
                            onClick={(e) => {
                                this.search("Nuoc");
                            }}
                        >
                            {" "}
                            Nước uống
                        </Button>
                        <Button
                            className="type-button"
                            onClick={(e) => {
                                this.search("Combo");
                            }}
                        >
                            {" "}
                            Combo
                        </Button>
                    </Row>
                    
                    <Row>{food_list}</Row>
                </Col>
                <Col className="cart">
                    {/* <HeaderCart /> */}
                    {cart_food_list}
                    <Container>
                        Tổng: <h1>{this.state.totalCost}</h1>
                        {/* <Button txt="Thanh toán" path="pay" /> */}
                        <Button
                            onClick={(e) => {this.togglePay();
                            }}
                        >
                            Thanh toán{" "}
                        </Button>
                    </Container>
                </Col>

                <Modal isOpen={this.state.donePay}toggle={this.togglePay}>
                    <ModalBody>
                    <Card className="msg">
                    Thanh toán thành công!
                    </Card>
                    </ModalBody>
                    </Modal>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalBody>
                    <Card className="modal-drug-item">
                        <img className="modal-drug-img" width="200px" height="200px" src="add-item.png" alt = "Ảnh thuốc"></img>
                        <CardBody>
                        <CardTitle tag="h5" className="modal-drug-text">{this.state.currentFood.food_name}</CardTitle>
                        <CardSubtitle tag="h6" className="modal-drug-title">{this.state.currentFood.price}</CardSubtitle>
                            
                        </CardBody>
                    </Card>
                        <Button onClick={(e) => { this.addFood(this.state.currentFood);  this.toggleModal(); }} className="modal-add-button"> Thêm vào giỏ hàng </Button>
                        <Button className="modal-cancel-button" onClick={(e) => {
                                this.toggleModal();
                            }}
                        >
                            Hủy{" "}
                        </Button>
                    </ModalBody>
                </Modal>
            </Row>
        );
    }
}

export default PickFood;
// class HeaderCart extends Component {
//     render() {
//         const { customerName, Role } = this.props;
//         return <CustomerInfo props={this.props} />;
//     }
// }
// class CustomerInfo extends Component {
//     render() {
//         const { customerName, Role } = this.props;

//         return (
//             <h6>
//                 <Row> Người dùng: {customerName}</Row>
//                 <Row> Vai trò: {Role}</Row>
//             </h6>
//         );
//     }
// }
