const Airtable = require("airtable")
const airtableConfig = require("../config/airtable.json")
const database = new Airtable({apiKey: airtableConfig.API_key})
var drinksBase = database.base(airtableConfig.drinksBase);
var bartenderBase = database.base(airtableConfig.bartenderBase);

async function getDrink(id){
    console.log("getDrink is called in airtable");
    const drink = await drinksBase('Drinks').find(id); 
    console.log("getdrink responds from airtable");
    console.dir(drink);
    return drink;
}

async function listDrinks(){
    console.log("listDrinks is called in airtable");
    const menu = await drinksBase('Drinks').select({
        maxRecords: 10,
        view: "Recipe Gallery"
    });
    console.log("listDrinks responds from airtable");
    console.dir(menu);
    return menu;
}

async function getBartender(id){
    console.log("getBartender is called in airtable");
    try{
        var bartender = await bartenderBase('Bartenders').find(id);
        // throw Error("whoops!")
    }
    catch (error){
        console.log(error.message)
    }
    console.log("getBartender responds from airtable");
    console.dir(bartender);
    return bartender;
}

module.exports ={
    getBartender, getDrink, listDrinks,
}
