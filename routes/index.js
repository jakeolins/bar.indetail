var express = require('express');
var drinkController = require('../controllers/drinkController')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express Yourself' });
  res.render('home', { title: 'Home' });
});


router.get('/drinks/:id', async function(req, res, next) {
  console.log("getDrinks is called")
  const drink = await drinkController.getDrink(req.params.id);
  //res.send(drink)
  console.dir(drink)
  res.render("drink",drink.fields)
  //res.render('index', { title: 'Express Yourself' });
});

router.get('/menu', async function(req, res, next) {
  console.log(new Date().getTime())
  console.log("listDrinks is called")
  const menu = await drinkController.listDrinks(req.params);
  //res.send(menu)
  console.dir(menu)
  res.render("menu",{records:menu})
  console.log(new Date().getTime())
  //res.json(menu)
  //res.render('index', { title: 'Express Yourself' });
});


router.get('/bartender/:id', async function(req, res, next) {
  console.log("getBartender is called")
  const bartender = await drinkController.getBartender(req.params.id);
  console.dir(bartender)
  res.render("bartender",bartender.fields)
  //res.render('index', { title: 'Express Yourself' });
});

router.get('/staff', async function(req, res, next) {
  console.log("listBartenders is called")
  const staff = await drinkController.listBartenders(req.params);
  //res.send(staff)
  console.dir(staff)
  res.render("staff",{records:staff})
  //res.json(menu)
  //res.render('index', { title: 'Express Yourself' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/apply', function(req, res, next) {
  res.render('apply', { title: 'Apply' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.post('/apply', async function(request, res, next) {
  console.dir(request.body)
  await drinkController.submitApplication(request.body.Name, 
    request.body.WhoAreYou, 
    request.body.Bar, 
    request.body.Drink, 
    request.body.Recipe, 
    request.body.SecretIngredient, 
    request.body.DoNots,
    request.body.ContactInfo,
    request.body.DrinkStory)
  res.render('apply', { title: 'Apply' });
});


module.exports = router;
