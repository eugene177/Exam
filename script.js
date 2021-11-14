const NAME_INPUT = document.getElementById('productName')
const IMAGE_INPUT = document.getElementById('productImage')
const DESC_INPUT = document.getElementById('productDescription')
const PRICE_INPUT = document.getElementById('productPrice')
const AMOUNT_INPUT = document.getElementById('productAmount')
const ADD_BUTTON = document.getElementById('buttonAdd')
const BASKET = document.querySelector('.basket__products')
const PURCHASES = document.querySelector('.container__item__purchases')
const BUY_BUTTON = document.querySelector('#buttonBuy')
const DELETE_BUTTON = document.querySelector('#buttonDelete')
const NEXTDAY_BUTTON = document.querySelector('.container__btn')
let BOUGHT_PRODUCTS = []
let PRODUCTS = []
ADD_BUTTON.addEventListener('click', function addProduct() {
  const product = new Product(
    NAME_INPUT.value,
    IMAGE_INPUT.value,
    DESC_INPUT.value,
    PRICE_INPUT.value,
    AMOUNT_INPUT.value
  )
  console.log(PRODUCTS)

  clearValues()
  drawProducts()
})

function clearValues() {
  NAME_INPUT.value = ''
  IMAGE_INPUT.value = ''
  DESC_INPUT.value = ''
  PRICE_INPUT.value = ''
  AMOUNT_INPUT.value = ''
}

function drawProducts() {
  let productsMarkup = ''

  PRODUCTS.forEach(function (item) {
    productsMarkup += item.getMarkup()
  })
  BASKET.innerHTML = productsMarkup
}

function Product(name, image, description, price, amount) {
  this.name = name
  this.image = image
  this.description = description
  this.price = price
  this.amount = amount

  PRODUCTS = [...PRODUCTS, this]
}

Product.prototype.getMarkup = function () {
  return `
  
  <div class = 'basket__product'>
    Name: ${this.name} <br>
    Image: ${this.image} <br>
    Description: ${this.description} <br>
    Price: ${this.price} <br>
    Amount: ${this.amount} <br>
    
  </div>
  
  
  `
}

DELETE_BUTTON.addEventListener('click', function deleteProducts() {
  BASKET.innerHTML = ''
  PRODUCTS = []
})

BUY_BUTTON.addEventListener('click', function ProductsProducts() {
  PURCHASES.innerHTML += BASKET.innerHTML
  BASKET.innerHTML = ''
  BOUGHT_PRODUCTS = [...BOUGHT_PRODUCTS, ...PRODUCTS]
  PRODUCTS = []
})

NEXTDAY_BUTTON.addEventListener('click', function nextDay() {
  PURCHASES.innerHTML = ''
  BASKET.innerHTML = ''
  alert(
    `Today you've bought ${
      BOUGHT_PRODUCTS.length
    } products for ${BOUGHT_PRODUCTS.reduce(function (prev, item) {
      return prev + item.amount * item.price
    }, 0)} $`
  )
  BOUGHT_PRODUCTS = []
})
