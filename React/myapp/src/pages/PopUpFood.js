import './style.css'
import React from 'react';

function PopUpFood(food) {
    return ( <html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Figure_3</title>
    <link rel="stylesheet" href="style.css"/>
</head>

<body>
    <div class='itemContainer'>
        <div class="itemHeader">
            <h2 class='headerName'>ADD TO CART</h2>
            <button class="closeBtn">X</button>
        </div>
        <div class="itemBody">
            <div>
                <img class="itemPic" src="https://shipdoandemff.com/wp-content/uploads/2018/05/Hamburger-b%C3%B2.png"
                    alt="hamburgerPic"/>
            </div>
            <div class="itemDetail">
                <div class="itemPrice">
                    <div className='itemPrice_1'>
                        <h4>SKU</h4>
                        <h5>401</h5>
                    </div>
                    <div className='itemPrice_2'>
                        <h4>Hamburger</h4>
                        <h5>Burger</h5>
                    </div>
                    <div className='itemPrice_3'>
                        <h4>Unit Price</h4>
                        <h3 class="redColor">kr 123,00</h3>
                    </div>
                </div>
                <div class="itemQuantity">
                    <div class="itemQuantityText">Quantity</div>
                    <div class="itemQuantityBtn">
                        <button type="button" class="addMinusBtn">-</button>
                        <input type="text" class="addMinusText" value="1"/>
                        <button type="button" class="addMinusBtn">+</button>
                    </div>
                </div>
                <div class="itemNutri">
                    <h5>Protein: <span class="itemNutriText">What is Lorem ipsum?</span> </h5>
                    <h5>Additives: <span class="itemNutriText">03</span> </h5>
                    <h5>Baking material: <span class="itemNutriText">040</span> </h5>
                    <h5>Food decoration: <span class="itemNutriText">04</span> </h5>
                    <h4>Slide dishes(<span class="redColor">*</span>) <span class="itemNutriText textSize">Selected
                            quantity 0</span> </h4>
                    <h6 class="fontW">Please select on of the properties below</h6>
                    <div class="checkboxItem" >
                        <input class="checkBox" type="checkbox"/>
                        <label class="itemNutriCheckText" for="checkbox"><h5>Vegetables</h5></label> 
                    </div>
                </div>
                <button class="bottomBtn" type="button">Kr 12300</button>
            </div>
        </div>

    </div>

    <script src="main.js"></script>
</body>

</html>
    )

}
export default PopUpFood;