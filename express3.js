const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//PUT --> Ändra data DELETE --> Radera data bra att veta

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
 res.send('testtest');
})
app.get('/profile', (req, res) => {
 res.send('getting profile');
});
app.post('/profile', (req, res) => {
	console.log(req.body)
 res.send("Sucess");
});

app.listen(3000); 