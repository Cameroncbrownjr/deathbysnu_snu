const mysql = require("mysql");
const inq = require('inquirer')
const clear = require('clear')

let con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Pumpkin1!',
    database: 'basic_products_DB'
});
//connect to the db
con.connect(function (err) {
    if (err) throw err;
    displayAllProducts();
});

function displayAllProducts() {
    con.query('SELECT * FROM products', function (err, results) {
        console.log('\n')
        console.table(results)
        console.log('\n')
        askToBuy()
    })
}

function askToBuy() {
    inq.prompt({
        name: 'showAll',
        type: 'list',
        message: 'Buy something or get the hell out!',
        choices: ['yes', 'no']
    })
        .then(function (results) {
            if (results.showAll === 'yes') {
                // clear()
                console.log("Watchu want?")
                buyProducts()
                // con.end()
            } else {
                clear()
                console.log('bye!')
                con.end()
            }
        })
}
function buyProducts() {
    console.log("This is working");
    // query the database for all items being auctioned
    con.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        // once you have the items, prompt the user for which they'd like to bid on
        inq
            .prompt([
                {
                    name: "name",
                    type: "rawlist",
                    choices: function () {
                        var productsArray = [];
                        for (var i = 0; i < results.length; i++) {
                            productsArray.push(results[i].name);
                        }
                        return productsArray;
                    },
                    message: "What item would you like to buy?"
                },
                {
                    name: "howMany",
                    type: "input",
                    message: "How many would you like to buy?"
                }
            ])
            .then(function (answer) {
                // get the information of the chosen item
                var chosenProduct;
                console.log(answer.name)

                for (var i = 0; i < results.length; i++) {
                    if (results[i].name === answer.name) {
                        chosenProduct = results[i].name;
                        if (results[i].quantity >= answer.howMany){
                            console.log("we have dis");
                            results[i].quantity- answer.howMany;
                        }
                        else {
                            console.log("we out")
                        }
                        
                    }
                }
                console.log(chosenProduct);
                console.log(answer.howMany);
            })
    }
    )
}
// displayAllProducts(askToBuy)