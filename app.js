const http = require('http')
const url = require('url')
const { PORT = 3000 } = process.env

http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  queryObject.counter++
  res.end(JSON.stringify(queryObject))
}).listen(PORT)