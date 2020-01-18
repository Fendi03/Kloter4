const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const dbConn = require('./lib/mysql/connection.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    let dataJudul = 'Selamat Datang';
    let dataCashier = [];
    dbConn.query('SELECT * FROM cashier', (err,data)=>{
        dataCashier = data
    })
    let dataCategory = [];
    dbConn.query('SELECT * FROM category', (err,data2)=>{
        dataCategory = data2
    })
    dbConn.query('SELECT * FROM arkashop INNER JOIN cashier ON cashier.id = arkashop.cashier','SELECT * FROM arkashop INNER JOIN category ON category.idb = arkashop.category',(err,data, data2)=>{
        res.render('index',{dataShop: data, data2, dataJudul, dataCashier, dataCategory});
    })
    
})

app.get('/add', (req,res)=>{
    res.redirect('/')
})

app.post('/create',(req,res)=>{
    const {cashier, product,category, price} = req.body;
    dbConn.query('INSERT INTO arkashop SET ?', {cashier, product, category, price}, (err)=>{
        if (err) throw err;
        res.redirect('back');
    });
})

app.get('/delete', (req, res) => {
    const {no} = req.query;
    dbConn.query('DELETE FROM arkashop WHERE no = ?', no, (err)=>{
        if (err) throw err;
        res.redirect('/');
    }); 
});

app.post('/update',(req,res) => {
    const {no,cashier, product,category, price} = req.body;
    dbConn.query("UPDATE arkashop SET cashier='"+cashier+"',product='"+product+"',category="+category+"',price='"+price+' WHERE no='+ no, (err)=>{
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});