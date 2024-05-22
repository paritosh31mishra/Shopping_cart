
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let clearcart = document.querySelector('.clearcart');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('#totalamount');
let avrg = document.querySelector('#average');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

clearcart.addEventListener('click', ()=>{
    listCards = [];
    reloadCard();
})

let products = [
    
    {
        "id": 1,
        "name":"  LOUNGE CHAIR 1",
        "price": 200,
        "image": "1.png"
    },
    {
        "id": 2,
        "name":" LOUNGE CHAIR 2",
        "price": 250,
        "image": "2.png"
    },
    {
        "id": 3,
        "name":"  LOUNGE CHAIR 3",
        "price": 290,
        "image": "3.png"
    },
    {
        "id": 4,
        "name":" LOUNGE CHAIR 4",
        "price": 200,
        "image": "4.png"
    },
    {
        "id": 5,
        "name":"  LOUNGE CHAIR 5",
        "price": 300,
        "image": "5.png"
    },
    {
        "id": 6,
        "name":"  LOUNGE CHAIR 6",
        "price": 200,
        "image": "6.png"
    },
    {
        "id": 7,
        "name":"  LOUNGE CHAIR 7",
        "price": 200,
        "image": "7.png"
    },
    {
        "id": 8,
        "name":" LOUNGE CHAIR 8",
        "price": 200,
        "image": "8.png"
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})" >Add To Card</button>
            `;
           
        list.appendChild(newDiv);
    })
}

initApp();

function addToCard(key){
 
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <div class="Remove" onclick= "remove_item(${key})">Remove</div>
                `;
                listCard.appendChild(newDiv);
        }
    })

    total.innerText = "Total Amount:  " +  totalPrice.toLocaleString();
    calculate_average(totalPrice, listCards.length);
    quantity.innerText = count;
}

function calculate_average(price, size) {
    if(price == 0)    
    avrg.innerText = "Average Amount: 0";
   else
   avrg.innerText = "Average Amount:  " +  (price/size).toLocaleString();
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


function remove_item(key){
   delete listCards[key];
    reloadCard();
}


