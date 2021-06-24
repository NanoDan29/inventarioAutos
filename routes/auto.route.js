const { Router } = require('express')
const router = Router()
const { getAuto, registrarAuto,getAllAutos,deleteAuto } = require('../service/auto.service')

router.route('/auto/:idAuto')
    .get(getAuto)
    .delete(deleteAuto)

router.route('/autos')
    .get(getAllAutos)

router.route('/auto/:idAuto/:nombre/:marca/:costo')
    .post(registrarAuto)



module.exports = router