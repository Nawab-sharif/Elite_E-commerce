const db = require('../databaseConfig.js');

// ----------------- //
// Product Section  //
// ----------------- //

// Product Save Logic
let productSave = (req, res) => {
    // console.log(req.body);
    let productName = req.body.productName;
    let productBrand = req.body.productBrand;
    let productPrice = req.body.productPrice;
    let productRating = req.body.productRating;
    let image = req.file.filename;
    let values = [[productName, productBrand, productPrice, productRating,image]]

    let sql = 'insert into product (productName, productBrand, productPrice, productRating,image) values ?'
    db.query(sql,[values],(err,result)=>{
        if (err) throw err;
        else {
            res.send('"Data Saved')
            console.log("Data Inserted Successfully")
        }
    })
}

// Product get Logic
let productGet = (req,res)=>{
    let sql = "select * from product";
    db.query(sql,(err,result)=>{
        if (err) throw err;
        else res.json(result);
    })
}

// Product Delete Logic
let productDelete = (req, res)=>{
    let id = req.params.id;
    let sql = "delete from product where id = ?"

    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.send("Data Deleted")
        }
    })
}

// Product Update Logic
let productUpdate = (req,res)=>{
    let id = req.params.id;
    let values = req.body;
    let sql = 'update product set ? where id = ? '

    db.query(sql,[values,id] , (err,result)=>{
        if(err) throw err
        else{
            res.send("Data Updated")
            console.log('Data Updated')
        }
    })
}


module.exports = {productSave , productGet , productDelete , productUpdate}