const express = require('express')
const app = express();
const port = 4000
const adminRouter = require("./routes/adminRouter")
const indexRouter = require("./routes/indexRouter")
const productosRouter = require("./routes/productosRouter")
const userRouter = require("./routes/userRouter")
const methodOverride = require('method-override');
const session = require('express-session');
const cookieCheck = require('./middlewares/cookieCheck');
const localsCheck = require("./middlewares/localsCheck")
const cookieParser = require("cookie-parser");
const { cookie } = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static((__dirname + '..', 'public')));
app.use(cookieParser())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use(cookieCheck);
app.use(localsCheck);

app.use('/', indexRouter);
app.use('/productos', productosRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.use(function (req, res, next) {
    res.status(404).render('error', { title: "Error" });
});


app.listen(port, () => console.log('El servidor está corriendo en el puerto ' + port))

