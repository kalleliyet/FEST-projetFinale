const express = require('express')
const mongoose=require('mongoose')
const participantRoutes=require('./routes/participants')

//express app
const app= express()

//middleware
 
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path , req.method)
    next()
})

//routes
app.use('/api/participants',participantRoutes)

//connect to db
mongoose.connect('mongodb+srv://mohamedazizkallel:test1234@fest-cluster.aqd1sbs.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000,()=>{
        console.log('listening on 4000')
    })
})
.catch(error=>{
    console.log(error)
})

