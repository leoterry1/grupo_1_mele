const express = require('express')
const app = express();
const port = 4000


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/', );
app.use('/productos', );
app.use('/admin', );
app.use('/user', );

app.listen(port,()=> console.log('el servidor esta corriendo en el puerto ' + port)) 