const products = [
    { name: 'Shampoo', color: 'Balck', price: 1550 },
    { name: 'Laptop', color: 'Silver', price: 55500 },
    { name: 'Telivishion', color: 'Balck', price: 25550 },
    { name: 'Watch', color: 'Blue', price: 5000 },
    { name: 'Mobile', color: 'Red', price: 52550 },

]

const findProduct = products.find(({ price }) => price == 5000)
console.log(findProduct);