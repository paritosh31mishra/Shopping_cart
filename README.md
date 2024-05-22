# Shopping Cart Project

This is a simple shopping cart application built using HTML, CSS, and JavaScript. The project includes a product list where users can add items to their cart, view the cart, adjust quantities, remove items, and see the total and average prices of the items in the cart.

## Features

- View a list of products.
- Add products to the shopping cart.
- View and adjust product quantities in the cart.
- Remove products from the cart.
- Clear the entire cart.
- View the total and average price of items in the cart.

## Installation

1. Clone the repository:
    git clone https://github.com/yourusername/shopping-cart.git

2. Navigate to the project directory:
    cd shopping-cart

3. Open `index.html` in your preferred web browser.

## Usage

- Click on "Add To Cart" buttons to add items to your shopping cart.
- Click on the cart icon to view your cart.
- Use the `+` and `-` buttons to adjust the quantity of each item in your cart.
- Click on "Remove" to remove an item from your cart.
- Click on "Clear Cart" to remove all items from your cart.
- Click on "Close" to close the cart view.

## Technologies Used
- HTML
- CSS
- JavaScript




# Pseudo code 

BEGIN

  DEFINE variables for interacting with HTML elements:
    - openShopping, closeShopping, clearcart, list, listCard, body, total, avrg, quantity

  SET event listeners for opening and closing the shopping cart:
    - on 'openShopping' click, add 'active' class to body
    - on 'closeShopping' click, remove 'active' class from body
    - on 'clearcart' click, clear the cart array and call reloadCard()

  DEFINE an array 'products' containing product objects (id, name, price, image)

  DEFINE an empty array 'listCards' to store items added to the cart

  FUNCTION initApp:
    - FOR each product in 'products'
      - CREATE a new div with class 'item'
      - SET inner HTML of the div to display product image, name, price, and "Add to Cart" button
      - APPEND the new div to 'list'
    - END FOR
  END FUNCTION

  CALL initApp()

  FUNCTION addToCard(key):
    - IF the product at index 'key' in 'listCards' is null
      - COPY the product from 'products' to 'listCards' and set quantity to 1
    - END IF
    - CALL reloadCard()
    - DISPLAY alert "product added successfully!!"
  END FUNCTION

  FUNCTION reloadCard:
    - CLEAR the inner HTML of 'listCard'
    - INITIALIZE variables 'count' and 'totalPrice' to 0
    - FOR each item in 'listCards'
      - INCREMENT 'totalPrice' by item price
      - INCREMENT 'count' by item quantity
      - IF item is not null
        - CREATE a new list item (li) element
        - SET inner HTML of the list item to display item image, name, price, quantity, and control buttons
        - APPEND the new list item to 'listCard'
      - END IF
    - END FOR
    - UPDATE 'total' with the total price
    - CALL calculate_average(totalPrice, listCards.length)
    - UPDATE 'quantity' with the total count of items
  END FUNCTION

  FUNCTION calculate_average(price, size):
    - IF price is 0
      - SET 'avrg' inner text to "Average Amount: 0"
    - ELSE
      - SET 'avrg' inner text to "Average Amount: " + (price/size)
    - END IF
  END FUNCTION

  FUNCTION changeQuantity(key, quantity):
    - IF quantity is 0
      - DELETE item from 'listCards'
    - ELSE
      - UPDATE item quantity and price in 'listCards'
    - END IF
    - CALL reloadCard()
  END FUNCTION

  FUNCTION remove_item(key):
    - DELETE item from 'listCards'
    - CALL reloadCard()
  END FUNCTION

END
