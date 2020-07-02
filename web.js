var express = require('express');
var app = express();
<<<<<<< HEAD
app.use(express.static(__dirname + '/src/index.html')); //aqui você define onde está o index.html da sua aplicação.
app.listen(process.env.PORT || 3000 , () => console.log("Server is running..."));
=======
app.use(express.static(__dirname + 'src/')); //aqui você define onde está o index.html da sua aplicação.
app.listen(process.env.PORT || 3000);
>>>>>>> 5dc3ad4484184030ed249f6f45d5b185d9c431e0
