const { Router } = require('express');

const router = Router();

    router.get('/', (req, res) => {
        res.send( 
            "bienvenidos a la base de datos de esteticas" )
    });

    router.use("./user", require("./User"))
    router.use("./services", require("./services"))


    module.exports = router;