const { log } = require('console')
const http = require ('http')

const hostname = '192.168.97.210'

const port = 3000

const server = http.createServer((req,res)=>{
  if (req.url === '/') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end("hello world")
  }else if(req.url === '/solo'){
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end("hello swarup")
  }else{
    res.statusCode = 404
    res.end("404 Not found")
  }
});

server.listen(port,hostname,()=>{
    console.log(`server listing at http://${hostname}:${port}`);
})