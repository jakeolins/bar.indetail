const airtable = require('./myapp/models/airtable')

//using this so we can use an 'await' keyword
// (async () => {
// const result = await airtable.submitApplication()
// console.log(result)
// })()

airtable.submitApplication("Thing", "Place", "Orange", "Banana").then(function (result){
    console.log(result)
})

