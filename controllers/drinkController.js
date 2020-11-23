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
    console.dir(bartender.fields);
    return bartender;
}

async function listBartenders(){
    console.log("listBartenders is called in drinkController");
    const staff = await Airtable.listBartenders();
    return staff;
}

async function submitApplication(Name, 
    WhoAreYou,
    Bar, 
    Drink, 
    Recipe,
    SecretIngredient,
    DoNots,
    ContactInfo,
    DrinkStory){
    const result = await Airtable.submitApplication(Name, 
        WhoAreYou,
        Bar, 
        Drink, 
        Recipe,
        SecretIngredient,
        DoNots,
        ContactInfo,
        DrinkStory);
    return result;
}

async function askExpert(messages){
    const result = await Airtable.askExpert(messages);
    return result;
}

async function listMessages(messages){
    const result = await Airtable.listMessages()
}


module.exports ={
    getBartender, getDrink, listDrinks, listBartenders, submitApplication, askExpert,
}

