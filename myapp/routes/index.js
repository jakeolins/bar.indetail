var express = require('express');
var drinkController = require('../controllers/drinkController')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Yourself' });
});


router.get('/drinks/:id', async function(req, res, next) {
  console.log("getDrinks is called")
  const drink = await drinkController.getDrink(req.params.id);
  //res.send(drink)
  console.dir(drink)
  res.render("drink",drink.fields)
  //res.render('index', { title: 'Express Yourself' });
});

router.get('/menu/:', async function(req, res, next) {
  console.log("listDrinks is called")
  const menu = await drinkController.listDrinks(req.params);
  //res.send(menu)
  console.dir(menu)
  res.render("menu",menu.fields)
  //res.render('index', { title: 'Express Yourself' });
});


router.get('/bartender/:id', async function(req, res, next) {
  console.log("getBartender is called")
  const bartender = await drinkController.getBartender(req.params.id);
  console.dir(bartender)
  res.render("bartender",bartender.fields)
  //res.render('index', { title: 'Express Yourself' });
});

module.exports = router;
