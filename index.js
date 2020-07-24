const express = require('express')
const app = express()

const PORT = process.env.PORT 
app.get('/',(req, res)=> {
 res.send('hello')
})

app.get('/login',(req, res)=> {
    res.send('login')
   })
   app.get('/register',(req, res)=> {
    res.send('register')
   })

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})