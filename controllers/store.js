const Product  = require('../models/product');

exports.getHome = (req, res, next) => {
    Product.fetchAll()
      .then(([rows,fieldData]) => {
        res.render('home', {
          prods: rows,
          pageTitle: 'Home page',
          path: '/',
        }); 
      })
      .catch(err => console.log(err)); 
    
};

exports.getLogin = (req,res,next) => {
    res.render('store/login',{
        path: '/login',
        pageTitle: 'Login Page'
    });
};

exports.getSignup = (req,res,next) => {
    res.render('store/signup',{
        path: '/signup',
        pageTitle: 'Signup page'
    });
};

