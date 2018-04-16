var mysql = require("mysql");
var inquirer = require("inquirer");

//connect to mySQL db
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId);
  displayProducts();
  connection.end();
});


//displaying all products from mysql products db
//having bug with inquirer list choices 
function displayProducts(){
  connection.query('SELECT * FROM products',function (error, results) {
    if (error) throw error;
    for (var i =0; i<results.length; i++){
    var item = ("Item ID: "+ results[i].item_id + ", Name: " + results[i].product_name + ", Price: $ " + results[i].price);
    console.log(item);
    }
    console.log("ITEM[i]" + item);
    inquirer
    .prompt({
      name: "chooseProduct",
      type: "list",
      message: "Which item would you like to purchase?",
      choices: [item]
    })
    .then(function(answer) {
      if (answer.chooseProduct !==null) {
        console.log(item);
        console.log("worked " + answer.chooseProduct);
      }
    });

  });
};








//take customer's order [inquirer -list of options to choose from]
//make sure they agree to price [inquirer confirm: y/n]
//"Place order" //delete item from stock [if yes: "DELETE x from products WHERE item_name=y"]
//add money to money earned so far [make a table that holds purchases, then get sum]

//node app:
//1)display all items available for sale [done]
  //include id, names, price [done]
//prompt user with inquirer: [BUG!!!]
//1)ask: what is the id of the item you want to buy? 
//2) You want to buy ITEM. how many units of the product do you want?
//check the db to see if we have enough of that product
  //if not: "Insufficient quantity. We only have __ left in stock. Feel free to place a smaller order." END the order, do not allow it to go through 
  //if enough: complete order (ie: update db to reflect remainign quanity)
    //notify customer of total cost of purchase 