const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const baseRoute = require('./routes/baseRoute')
const chatRoute = require('./routes/chatRoute')

const app = express()
const MongoURI = config.get('MongoURI')
const PORT = config.get('port')

app.use(express.json( { extended: true } ))
app.use('/', baseRoute)
app.use('/chat', chatRoute) //нужно ли добавлять индекс к /chat или будет работать и так

async function start (){
    try {
        await mongoose.connect(MongoURI,
            {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }
        )
        app.listen(PORT, ()=>{
            console.log('Server has launched on port: ' + PORT)
        })
    } catch (error) {
        console.log("NEW ERROR" + error)
    }
}

start()
