var express = require('express')

var app = express()

app.get('/',function(res,req){

  req.send('hello,nihao')
})
app.get('/nihao',function(res,req){

  req.send('这是一个接口请求')
})
app.get('/api/first',function(res,req){

  req.send('处理数据')
})
app.get('/api/two',function(res,req){

  req.send('/api/two')
})
app.listen(3000)

