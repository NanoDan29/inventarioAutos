const mongoose= require('mongoose')
let Schema= mongoose.Schema;
let autoSchema=new Schema({
    idAuto:{
        type: String,
        required: true,
        unique:true
    },
    nombre:{
        type: String,
        required:false
    },
    marca:{
        type: String,
        required:false
    },costo:{
        type:Number,
        required:false
    }
})

module.exports=mongoose.model('inventario',autoSchema)