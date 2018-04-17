var mysql = require("mysql");
var inquirer = require("inquirer");

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
  promptToShopInitial();
});

function promptToShopInitial(){
  inquirer
  .prompt({
    name: "promptToShop",
    type: "confirm",
    message: "Welcome to bamazon! Would you like to shop?"
  })
  .then(function(answer) {
    if(answer.promptToShop){
      displayProducts();
    }
    else {
      connection.end();
    }
  });
}

function promptToShopAgain(){
  inquirer
  .prompt({
    name: "promptToShop",
    type: "confirm",
    message: "Sorry, we don't have that quantity. Would you like to keep shopping?"
  })
  .then(function(answer) {
    if(answer.promptToShop){
      displayProducts();
    }
    else {
      connection.end();
    }
  });
}

/*function userPurchase(){
  might make a fx for this
}*/

function displayProducts(){
  connection.query('SELECT * FROM products',function (error, results) {
    if (error) throw error;
    var itemArray=[];
    var itemUserChoice = {};
    for (var i =0; i<results.length; i++){
    var item = ("Item ID: "+ results[i].item_id + ", Name: " + results[i].product_name + ", Price: $ " + results[i].price);
    itemArray.push(item);
    itemUserChoice[item] = results[i].item_id;  //associate the whole string with just the item id 
    }
    inquirer
    .prompt({
      name: "chooseProduct",
      type: "list",
      message: "Which item would you like to purchase?",
      choices: itemArray
    })
    .then(function(answer) {
      if (answer.chooseProduct !==null) {
        var productID = itemUserChoice[answer.chooseProduct];
        // console.log("item ID: " + productID);
        quantityChoice(productID);
      }
    });
  });
};

function quantityChoice(productID) {
  inquirer
    .prompt({
      name: "quantityChoice",
      type: "input",
      message: "How many do you want to purchase?"
    })
    .then(function(answer) {
      if(answer.quantityChoice != null){
      // console.log(answer.quantityChoice);
      checkStock(productID, answer.quantityChoice);
      }
    });
}

function checkStock(userItemID, userQuantity) {
  var dbQuery ='SELECT stock_quantity FROM products WHERE item_id =' + userItemID;
  connection.query(dbQuery ,function (error, results) {
    if (error) throw error;
    if (results[0].stock_quantity >= userQuantity){
     // userPurchase(); <--if i wana seperate out the function and pass it args
     //regarding the mysql query: do i need to connection.query EVERY TIME?!
     console.log("buy thissssss");
     var dbUpdate = 'UPDATE products SET stock_quantity = ' + [results[0].stock_quantity - userQuantity] +
     ' WHERE item_id =' + userItemID;
     var dbSelect = 'SELECT stock_quantity FROM products WHERE item_id =' + userItemID;
     console.log(dbSelect);
     //function here for total price of purchase :)
    }
    else {
      promptToShopAgain();
    }
 });
}
