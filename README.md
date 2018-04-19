# bamazon-

Bamazon is an Amazon-like storefront that stores stock information in a database and allows the customer to purchase items and deplete the stock from the store's inventory. 

This app has different functionality depending who is using it. There are features for the 'customer' such as see inventory and purchase items, and there are features for the 'store manager' who can check inventory, and add to inventory. 

**Link to App Demo For the Customer Features** 
[Click Here](https://youtu.be/w-KOVPb3kR4)

### Technologies Used:
* javascript
* node.js
* mysql
* npm packages: inquirer, mysql 

## Before beginning: 
Make sure that MAMP is running your server, mysql database is running, and that the port listed in the mysql database matches the port in the js code

![GitHub Logo](/images/host.png) 

![GitHub Logo](/images/code.png)

### To start running the app as the customer:
* In your terminal, once you are in the correct directory, type in “node bamazonCustomer.js”. 
* From there, the app will prompt you with select options.
* You'll do the same for manager, however you will type the following into node: "node bamazonManager.js", then you can follow the prompts.

![GitHub Logo](/images/node.png)

### To check the mysql database in your terminal:
* Type in “mysql –u root –p”
* You will be prompted to input a password. Type in your password (or the default password “root”)
* Once you are in, type in “SELECT * FROM bamazon_db.products"; (or any mysql query of your choice. 

![GitHub Logo](/images/password.png)

![GitHub Logo](/images/mysql2.png)