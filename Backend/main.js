const express = require('express');
const db = require('./databaseConfig.js')
const productRouter = require('./routes/productRoutes.js');
const cors = require('cors');
let app = express();
let port = 4000;

// middleware
app.use(express.json())
app.use(express.static('uploads'))
app.use(cors())
app.use('/api',productRouter);   // mount the router

// Database Connection
db.connect((err)=>{
    if (err) throw err;
    else console.log("Database Connected!...")
})

// Table Creation in database
let productTable = `CREATE TABLE if not exists product (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(255) NULL,
  productBrand VARCHAR(255) NULL,
  productPrice VARCHAR(255) NULL,
  productRating VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));`

db.query(productTable,(err,result)=>{
    if (err) throw err;
    else console.log('Product Table Created')
})

// Run the server
app.listen(port,()=>{
    console.log(`Server is running at : http://127.0.0.1:${port}`);
})