var express = require('express');
var app = express();
var blogList = require('./list/index.js')
app.get('/',(req, res)=>{
	console.log('send index.html')
	res.set({'Access-Control-Allow-Origin': 'http://linzhenbin.com'})
	res.sendFile(__dirname + '/index.html')
})
app.use('/static',(req, res) => {
	res.set({'Access-Control-Allow-Origin': 'http://linzhenbin.com'})
	res.sendFile(__dirname + '/static' + req.path);
})
app.use('/list', (req, res) => {
	let pageList = {}
	pageList.success = true
	pageList.data = []
	if(req.query.page){
		let page = req.query.page
		res.set({'Access-Control-Allow-Origin': 'http://linzhenbin.com'})
		pageList.data = blogList.data.slice( (page- 1)*5, page*5)
	}else{
		let type = req.query.type
		res.set({'Access-Control-Allow-Origin': 'http://linzhenbin.com'})
		blogList.data.forEach((item)=>{
			if(item.type === type){
				pageList.data.push(item)
			}
		})
	}
	res.json(pageList)
})
app.use('/content',(req, res) =>{
	res.set({'Access-Control-Allow-Origin': 'http://linzhenbin.com'})
	res.sendFile(__dirname + '/public/md_files' + req.path);
})
app.listen(80,()=>{
	console.log('listening at 80 port');
})