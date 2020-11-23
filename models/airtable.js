const Airtable = require("airtable")
const airtableConfig = require("../config/airtable.json")
const database = new Airtable({apiKey: airtableConfig.API_key})
var drinksBase = database.base(airtableConfig.drinksBase);
var messageBase = database.base(airtableConfig.messageBase);
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
    console.log(new Date().getTime())
    const menu = await drinksBase('Drinks').select().firstPage();
    console.log(new Date().getTime())
    console.log("listDrinks responds from airtable");
    console.dir(menu);
    return menu;
}

async function getBartender(id){
    console.log("getBartender is called in airtable");
    try{
        var bartender = await drinksBase('Bartenders').find(id);
        // throw Error("whoops!")
    }
    catch (error){
        console.log(error.message)
    }
    console.log("getBartender responds from airtable");
    console.dir(bartender);
    return bartender;
}

async function listBartenders(){
    console.log("listBartenders is called in airtable");
    const staff = await drinksBase('Bartenders').select().firstPage();
    console.log("listDrinks responds from airtable");
    console.dir(staff);
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
    const result = await drinksBase('Applications').create([
        {
          "fields": {
              Name: Name,
              WhoAreYou: WhoAreYou,
              Bar: Bar,
              Drink: Drink,
              Recipe: Recipe,
              SecretIngredient: SecretIngredient,
              DoNots: DoNots,
              ContactInfo: ContactInfo,
              DrinkStory: DrinkStory,
          }
        },
      ]);
    return result 
}

async function askExpert(message){
    const result = await messageBase('messages').create([
        {
            "fields": {
                message: message,
            }
        },
    ]);
    return result
}

async function listMessages(message){
    
}

// async function getDrinkByName(name){
//     let drink=null
//     drinksBase('Drinks').select({
//         // Selecting the first 3 records in Recipe Gallery:
//         maxRecords: 10,
//         view: "Recipe Gallery"
//     }).eachPage(function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.
        

//         records.forEach(function(record) {
//             const drinkName = record.get('RecipeName');
//             if(drinkName == name){
//                 drink = record;
//             }
//             console.log('Retrieved', record.get('RecipeName'));
//         });
//         const drinkId = drink.get('id');
//         // To fetch the next page of records, call `fetchNextPage`.
//         // If there are more records, `page` will get called again.
//         // If there are no more records, `done` will get called.
//         fetchNextPage();
//     done(drinkId)
//     }, function done(err) {
//         if (err) { console.error(err); return; }
//         return getDrink(drinkId)


//     });
// }
module.exports ={
    getBartender, getDrink, listDrinks, listBartenders, submitApplication, askExpert,
}
