const mysql = require("mysql");
const inq = require('inquirer')

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

function displayAllProducts() {
    con.query('SELECT * FROM products', function(err, results) {
        console.log('\n')
        console.table(results)
        console.log('\n')
    })
}

function askToShowProducts() {
    inq.prompt({
        name: 'showAll',
        type: 'list',
        message: 'Show all items in products table?',
        choices: ['yes', 'no']
    })
    .then(function(results) {
        if (results.showAll === 'yes') {
            displayAllProducts()
            askToShowProducts()
        } else {
            console.log('bye!')
            con.end()
        }
    })
}

askToShowProducts()

