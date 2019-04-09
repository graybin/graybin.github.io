var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
var mime = require('./mime.js')
var indexList = require('./list/index')

var server = http.createServer((req, res) => {
	var filePath = '.' + url.parse(req.url).pathname
	if(filePath === './'){
		filePath = './index.html'
	}else if(filePath === './list'){
		res.writeHead(200)
		res.write(JSON.stringify(indexList))
		console.log(JSON.stringify(indexList))
		res.end()
		return;
	}
	fs.exists(filePath, (exist) => {
		if(exist){
			var data = fs.readFileSync(filePath)
			var contentType = mime[path.extname(filePath)]
			res.writeHead(200, {
				'content-type': contentType
			})
			res.write(data)
			res.end()
		}else{
			res.writeHead(404)
			var info = {
				success: false,
				data: '未找到资源'
			}
			res.write(JSON.stringify(info))
			res.end()
		}
	})

})
server.listen(8080, ()=>{
	console.log('server port 8080')
}) 

