const express=require('express')
const dotenv=require('dotenv').config()
const {errorHandler} = require('./middlewares/errorMiddleware')
const app=express()
const port=process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/pages', require('./routes/pagesRoutes'))

app.use(errorHandler)

app.listen(port,()=>{
    console.log("server is up and running")
})
module.exports=app