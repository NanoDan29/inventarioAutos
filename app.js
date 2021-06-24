require("./config/config")
const express=require('express')
const app= express()
const cors=require("cors")
const bodyparser=require("body-parser")
const mongoose= require("mongoose")

const auto=require('./routes/auto.route')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// parse application/x-www-form-urlencoded para tomar fomularios html
app.use(bodyparser.urlencoded({ extended: false }))

// parse aplication/json
app.use(bodyparser.json())

app.use("/",auto)


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});



app.listen(process.env.PORT,()=>{
    console.log('Escuchando puerto: ', process.env.PORT);
})