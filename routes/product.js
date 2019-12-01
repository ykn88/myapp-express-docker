const express = require('express')
const db = require('../db')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select id, title, description, price from product`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(data)
    })
})

router.post('/', (request, response) => {
    const title = request.body.title
    const description = request.body.description
    const price = request.body.price
    const category = request.body.category
    
    const connection = db.connect()
    const statement = `insert into product (title, description, price) values ('${title}', '${description}', '${price}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(data)
    })
})


module.exports = router