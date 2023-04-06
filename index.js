var express = require('express')

var app = express()

app.get('/',function(res,req){

  req.send('hello,nihao')
})
app.get('/nihao',function(res,req){

  req.send('这是一个接口请求nihao')
})
app.get('/api/first',function(res,req){

  req.send('处理数据first')
})
app.get('/api/two',function(res,req){

  req.send('/api/two2')
})
app.get('/api/three',function(res,req){

  req.send('/api/three12')
})
app.get('/api/four',function(res,req){

  req.send('第四个接口')
})
app.listen(3000)

