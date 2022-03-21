const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Cherry Tomatoes',
        price: 20,
        category: 'vegetable'
    },
    {
        name: 'Pixie Orange',
        price: 30,
        category: 'fruit'
    },
    {
        name: 'Custard Apple',
        price: 50,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 15,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 75,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })