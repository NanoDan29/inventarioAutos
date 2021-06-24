const autoModel = require('../models/inventario.model')
const autoService = {}

autoService.getAuto = (req, res) => {
    let params = req.params
    autoModel.findOne({idAuto: params.idAuto})
        .exec((err, auto) => {
            if (err) res.status(400).json({ ok: "No existe el auto" })
            res.status(200).json([auto])
        })
}

autoService.getAllAutos=(req,res)=>{
   
    autoModel.find()
        .exec((err, auto) => {
            if (err) res.status(400).json({ ok: "No existe el auto" })
            res.status(200).json(auto)
        })
}

autoService.registrarAuto=(req,res)=>{
    let params = req.params

    let auto= new autoModel({
        idAuto:params.idAuto,
        nombre:params.nombre,
        marca:params.marca,
        costo:params.costo
    })

    auto.save((err,auto)=>{
        if (err) return res.status(400).json({
            ok: false,
            message: "Auto repetido",
            err
        });

        res.status(200).json(
            auto
        );
    })

}

autoService.deleteAuto=(req,res)=>{
    let params = req.params
    autoModel.findOneAndDelete({idAuto:params.idAuto})
        .exec((err,usario)=>{
            if (err) return res.status(400).json({
                ok: false,
                message: "No existe",
                err
            })
            res.status(200).json({
                ok: false,
                message: "Eliminado con exito",
                usario
            });
        })
}

module.exports = autoService