const express = require('express');
const productsRoutes = require('./products/products.routes');
const userRoutes = require('./users/users.routes');

const router = express.Router();

// middlewares
router.use(express.json());
router.use(express.urlencoded({extended: true}));

//Routers

// use() funciona para anteponer el primer parametro en todas las rutas

router.use('/products', productsRoutes);
router.use('/users', userRoutes);

module.exports = router