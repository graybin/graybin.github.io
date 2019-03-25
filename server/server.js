let express = require('express')
let app = express()

app.get('/list/:id', function(req, res) {
	res.send('user ' + req.params.id);
});

app.get('/content/:id', function(req, res) {
	res.send('user ' + req.params.id);
});

app.get('/', (req, res) => {
	res.set({'Access-Control-Allow-Origin':'*'})
	res.sendFile(__dirname + '/public/README.md');
});
app.listen(1000);



