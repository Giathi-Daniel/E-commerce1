// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const wrapper = document.querySelector('.wrapper');
const signUp = document.querySelector('.signup-link');
const singIn = document.querySelector('.signin-link');
const btnPopup = document.querySelector('.btn-popup');
const Close = document.querySelector('.icon-close');
let carts = document.querySelectorAll('.add-cart');


if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


// Sign up
signUp.onclick = () => {
    wrapper.classList.add('active');
}
// Sign in
singIn.onclick = () => {
    wrapper.classList.remove('active');
}
// PopUp
btnPopup.onclick = () => {
    wrapper.classList.add('active-popup');
}
// Close
Close.onclick = () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
}

///////////////////cart menu////////////////////
let cart_Items = [
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/f1.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/f2.jpg',
        price: 70,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/f3.jpg',
        price: 67,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/f4.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/f5.jpg',
        price: 60,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/f6.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/f7.jpg',
        price: 66,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n8.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n1.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n2.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n3.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n4.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n5.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n6.jpg',
        price: 78,
        inCart: 0
    },
    {
        name: 'Cartoon Astronaut T-shirts',
        tag: 'images/productts/n7.jpg',
        price: 78,
        inCart: 0
    }
]

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener("click", () => {
        cartNumbers(cart_Items[i]);
        totalCost(cart_Items[i]);
    })
}

/////prevent items dissappearing on refresh////////////\
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

///saving to local storage//////////////
function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);//from JSON to JS objects

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

///////////////Calculations////////////////////
function totalCost(product){
    //console.log("The product price is", product.price);
    ///checking the product cost in the local storage b4/////
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is:", cartCost);
    console.log(typeof cartCost);///from the local storage (string)

    //////////total sum
    if(cartCost != null){
        cartCost = parseInt(cartCost);////string to interger conversion
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

///////display in the cart page/////////
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);//from JSON to JS objects
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer){
        productContainer.innerHTML = '';//loads nothing since nothing in the local storage
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class="fa far fa-times-circle"></i>
                <img src="images/productts/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price}.00</div>
            <div class="quantity">
                <i class="far fa-arrow-alt-circle-left"></i>
                <span>${item.inCart}</span>
                <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>`;
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal"> $${cartCost}.00</h4>
            </div>`;
    }

    console.log(cartItems);
}
/////////function calling////////////
onLoadCartNumbers();
displayCart();








