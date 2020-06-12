const Airtable = require('../models/airtable')

async function getDrink(id){
    console.log("getDrink is called in drinkController");
    const drink = await Airtable.getDrink(id);
    return drink;
}

async function listDrinks(){
    console.log("listDrinks is called in airtable");
    const menu = await Airtable.listDrinks();
    return menu;
}

async function getBartender(id){
    console.log("getBartender is called in drinkController");
    const bartender = await Airtable.getBartender(id);
    return bartender;
}
module.exports ={
    getBartender, getDrink, listDrinks,
}

