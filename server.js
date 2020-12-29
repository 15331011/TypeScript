var http = require('http')
var fs = require('fs')
var base = './dist'
http.createServer(function(req, res){
    var gzTypeReg = /^.*(.css|.js).*$/
    pathname = base + req.url
    if(gzTypeReg.test(req.url)){
        pathname += '.gz'
        res.setHeader('Content-Encoding', 'gzip')
    }
    console.log(pathname)
    fs.stat(pathname, (err, status) => {
        if(err){
            console.log(err)
            res.writeHead(404)
            res.write('Resource Missing\n')
            res.end()
        } else {
            res.setHeader('Content-Type', 'text/html')
            var file = fs.createReadStream(pathname)
            file.on('open', ()=>{
                res.statusCode = 200
                file.pipe(res)
            })
            file.on('error', ()=>{
                console.log(err)
                res.writeHead(404)
                res.write('Resource Missing\n')
                res.end()
            })
        }
    })
}).listen(8081)