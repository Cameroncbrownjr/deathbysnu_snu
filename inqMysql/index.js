const mysql = require("mysql");
const inq = require('inquirer')
const clear = require('clear')

let con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'basic_products_DB'
});
//connect to the db
con.connect(function(err){
    if (err) throw err;
});

function displayAllProducts(cb) {
    con.query('SELECT * FROM products', function(err, results) {
        console.log('\n')
        console.table(results)
        console.log('\n')
        cb()
    })
}

function askToBuy() {
    inq.prompt({
        name: 'showAll',
        type: 'list',
        message: 'Buy something or get the hell out!',
        choices: ['yes', 'no']
    })
    .then(function(results) {
        if (results.showAll === 'yes') {
            clear()
            console.log("Sorry we're actually closed!")
            con.end()
        } else {
            clear()
            console.log('bye!')
            con.end()
        }
    })
}

displayAllProducts(askToBuy)