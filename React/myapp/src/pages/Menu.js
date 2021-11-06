import React, { Component } from "react";
import { FaYenSign } from "react-icons/fa";
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
        this.adjustItem = this.adjustItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.adjustFood=this.adjustFood.bind(this);
        this.addFood=this.addFood.bind(this);
        this.rmvItem=this.rmvItem.bind(this);
        this.total=this.total.bind(this);
        //     this.addDrug = this.addDrug.bind(this);
    }
    rmvItem(food) {
        
        const newCart = this.state.cart.filter((item) => item.food_name !== food.food_name);
        this.state.cart=newCart;
        food.num=1;
        this.total();
    }
    adjustItem(foodfix, more) {
        const A = foodfix;
        if (more) A.num++;
        else A.num--;
        if(A.num<1) alert("Bạn đã nhập sai số lượng!")
        else {
            const newcart = this.state.cart.map((food) => {
            if (food===foodfix) return A;
            else return food;
        });
        this.setState({
            cart: newcart,
        });
        this.total();
        }
    }
    adjustFood(event){
        const fix=this.state.currentCart
        const newCart=this.state.cart.map(
            (item)=>{
                if (item===fix) {item.num=event.target.value;}
                return item;
            }
        )
        this.setState({cart:newCart})
        this.total();
    //     const editFood=this.state.cart.filter(
    //         (item)=> if (item.food_name === event
    //     )
    //     newFood.num=event.target.value;
    //     this.setState({currentFood:newFood});
    }
    addFood(food) {;
        const exist = this.state.cart.filter(
            (item) => item.food_name===food.food_name
        );
        if (exist.length > 0) {
            this.adjustItem(exist[0], true);
        } else {
            this.setState({
                carts: this.state.cart.push(food),
            });
        }
        
        this.total();
    }

    search(type) {
        this.setState({
            food_display: this.state.food_list.filter(
                (food) => food.type===type
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
            (total, item) => total + item.price * item.num,0
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
          donePay: !this.state.donePay,
          cart:[],
          totalCost:0,
        });
    }

    componentDidMount() {
        this.setState(FoodOrdData);
        this.setState({
            food_display: this.state.food_list,
        });
        this.total();
    }
    // componentDidUpdate(){
    //     this.total();
    // }
    render() {
        const food_list = this.state.food_display.map((food) => {
            return (
                <div className="containCard">
                    <Card className="foodCard">
                        <Row className="foodRow">
                            <Col>
                            <img className='menuFoodImg' src="https://i.imgur.com/xZYkts5.jpg" />
                            </Col>
                            <Col>
                            <div className='menuFoodName'> {food.food_name}</div>
                            <div className='menuFoodPrice'> Giá tiền : {food.price}</div>
                            </Col>
                        </Row>
                        <Row className="foodRow2">
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
            return (
                <Container className="padding10">
                    <Card className="cartItemContent">
                        <img className='menuFoodImg2' src="https://i.imgur.com/xZYkts5.jpg" />
                        <a className="singleCost">{foodItem.price}</a> 
                        <Row className="incartItem">
                            {" "}
                            {foodItem.food_name}
                            <div className="qty">
                                {" "}
                                <Button className='subCartItem'
                                    onClick={(e) => {
                                        this.adjustItem(foodItem, false);
                                    }}
                                >
                                    -
                                </Button>
                                <input type="text" class="addMinusText" value={foodItem.num} name="amount" onChange={(e)=>{this.setState({currentCart:foodItem});this.adjustFood();}}/>
                            
                                <Button className='addCartItem'
                                    onClick={(e) => {
                                        this.adjustItem(foodItem, true);
                                    }}
                                >
                                    +
                                </Button>{" "}
                            </div>
                            <a className="totalMoney">{foodItem.price*foodItem.num}</a>
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
                        <Button className="type-button" onClick={(e) => {this.showAll();}}>
                            Tất cả
                        </Button>
                        <Button className="type-button" onClick={() => {this.search("DoAn");}}>
                            Món ăn
                        </Button>
                        <Button className="type-button" onClick={() => {this.search("Nuoc");}}>
                            Nước uống
                        </Button>
                        <Button className="type-button" onClick={() => {this.search("Combo");}}>
                            Combo
                        </Button>
                    </Row>
                    
                    <Row>{food_list}</Row>
                </Col>
                <Col className="cart">
                    {/* <HeaderCart /> */}
                    <CustomerInfo/>
                    {cart_food_list}
                    <Container>
                        Tổng: <h1>{this.state.totalCost}</h1>
                        <Button
                            onClick={(e) => {alert("Bạn đã thanh toán thành công!");
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
                {/* this.state.currentFood */}
                    <div class='itemContainer'>
                        <div class="itemHeader">
                        <h2 class='headerName'>ADD TO CART</h2>
                        <button class="closeBtn" onClick={this.toggleModal}>X</button>
                    </div>
                <div class="itemBody">
                <div className="Picbox">
                <img class="itemPic" src={this.state.currentFood.img}
                    alt="hamburgerPic"/>
                </div>
                <div class="itemDetail">
                    <div class="itemPrice">
                        <div className='itemPrice_1'>
                            <h4>Name</h4>
                            <h3>{this.state.currentFood.food_name}</h3>
                        </div>
                        <div className='itemPrice_3'>
                            <h4>Price</h4>
                            <h3 class="redColor">{this.state.currentFood.price}</h3>
                        </div>
                    </div>
                    <div class="itemQuantity">
                        <div class="itemQuantityText">Quantity</div>
                        <div class="itemQuantityBtn">
                            <button type="button" class="addMinusBtn" onClick={(e)=>this.adjustItem(this.state.currentFood,false)}>-</button>
                            <input type="text" class="addMinusText" value={this.state.currentFood.num} name="amount" onChange={this.adjustFood}/>
                            <button type="button" class="addMinusBtn" onClick={(e)=>this.adjustItem(this.state.currentFood,true)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
                <div class="itemNutri">
                        <h5>Protein: <span class="itemNutriText">{this.state.currentFood.Protein}</span> </h5>
                        <h5>Additives: <span class="itemNutriText">{this.state.currentFood.Additives}</span> </h5>
                        <h5>Baking material: <span class="itemNutriText">{this.state.currentFood.Material}</span> </h5>
                        <h5>Food decoration: <span class="itemNutriText">{this.state.currentFood.decoration}</span> </h5>
                       
                    </div>
                    <button class="bottomBtn" type="button" onClick={this.addFood, this.toggleModal}>Confirm</button>
            </div>
        </div>
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
class CustomerInfo extends Component {
    render() {
        const { customerName, Role } = this.props;

        return (
            <h6>
                <Row> Người dùng: Nguyễn Trường Hải Đăng </Row>
                <Row> Vai trò: Khách hàng</Row>
            </h6>
        );
    }
}
