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
  initialPrompt();
});

//add to inventory ==allow add more stock, how many 
//add product, add entirely new product 

function initialPrompt() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Hello Manager! Select option from menu",
        choices: [
          "View Products",
          "View Low Inventory",
          "Add to Inventory",
          "Add New Product",
          "Exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View Products":
          viewProducts();
          break;
  
        case "View Low Inventory":
          viewLowInventory();
          break;
  
        case "Add to Inventory":
          addInventory();
          break;
  
        case "Add New Product":
          addProduct();
          break;
        
        case "Exit":
          connection.end();
          break;
        }
      });
  }

function returnToMenu(){
  inquirer
  .prompt({
    name: "returnMenu",
    type: "confirm",
    message: "Return to main menu?"
  })
  .then(function(answer) {
    if(answer.returnMenu){
      initialPrompt();
    }
    else {
      connection.end();
    }
  });
}

function viewProducts(){
    connection.query('SELECT * FROM products',function (error, results) {
      if (error) throw error;
      var itemArray=[];
      for (var i =0; i<results.length; i++){
      var item = ("Item ID: " + results[i].item_id + ", Product Name: " + results[i].product_name + ", Department: " + results[i].department_name + ", Price: $" + results[i].price.toFixed(2) + ", Stock Quantity: " + results[i].stock_quantity);
      itemArray.push(item);
      console.log(itemArray[i] + "\n---------------------------------------------------------------------------------------------------------");
      }
      returnToMenu();
    });
  };

function viewLowInventory(){
connection.query('SELECT * FROM products',function (error, results) {
    if (error) throw error;   
    var itemArray=[];
    for (var i =0; i<results.length; i++){
    var item = ("Item ID: " + results[i].item_id + ", Product Name: " + results[i].product_name + ", Department: " + results[i].department_name + ", Price: $" + results[i].price.toFixed(2) + ", Stock Quantity: " + results[i].stock_quantity);
    itemArray.push(item);
    if (results[i].stock_quantity < 5){
    console.log(itemArray[i] + "\n---------------------------------------------------------------------------------------------------------");
        }
    }
    console.log("All of your inventory has at least 5 items in stock");
    returnToMenu();
    });
};

function addInventory(){
    connection.query('SELECT * FROM products',function (error, results) {
      if (error) throw error;
      var itemArray=[];
      var itemUserChoice = {};
      for (var i =0; i<results.length; i++){
      var item = (results[i].product_name +"-------Current Stock Quantity: " + results[i].stock_quantity);
      itemArray.push(item);
      itemUserChoice[item] = results[i].item_id;  
      }
      inquirer
      .prompt({
        name: "chooseProduct",
        type: "list",
        message: "Which product would you like to add inventory to?",
        choices: itemArray
      })
      .then(function(answer) {
        if (answer.chooseProduct !==null) {
          var productID = itemUserChoice[answer.chooseProduct];
          mathAddInventory(productID);
        }
      });
    });
  };

function mathAddInventory(productID) {
  inquirer
    .prompt({
      name: "addQuantity",
      type: "input",
      message: "How many units do you want to add?"
    })
    .then(function(answer) {
      if(answer.addQuantity != null){
      var addQuant = answer.addQuantity;
        updateStock(productID, addQuant);
      }
    });
}

function updateStock(productID, addQuant) {
var scope= "";
var checkDB ='SELECT stock_quantity FROM products WHERE item_id =' + productID;
connection.query(checkDB ,function (error, results) {
    if (error) throw error;
    var amountInStock = results[0].stock_quantity;
    scope=amountInStock;
    console.log("STOCKQUANT= " + scope);
    }); 
var updateDB ='UPDATE products SET stock_quantity = ' + [scope+addQuant] +
' WHERE item_id =' + productID;
connection.query(updateDB ,function (error, results) {
    if (error) throw error;
    var newAmount = parseInt(scope)+parseInt(addQuant);
    console.log("newamt=" + newAmount);
});
}


