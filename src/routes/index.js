const router = require('express').Router()


const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers')
//Routes

// >> Index
router.get('/', IndexController.index)

// >> Register
router.get('/register', CustomersController.index)

router.post('/register/add', CustomersController.add)

// >> List of Clients
router.get('/list', CustomersController.list)

// >> Edit Cliente
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

// >> Remove Client
router.get('/remove/:id', CustomersController.remove)

module.exports = router