const express = require('express')
const app = express();
const port = 4000
const adminRouter = require("./routes/adminRouter")
const indexRouter = require("./routes/indexRouter")
const productosRouter = require("./routes/productosRouter")
const userRouter = require("./routes/userRouter")


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());gi

app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.listen(port,()=> console.log('el servidor esta corriendo en el puerto ' + port)) 