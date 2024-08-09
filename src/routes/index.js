const { Router } = require('express');

const mainRouter = Router();

    mainRouter.get('/', (req, res) => {
        res.send( 
            "bienvenidos a la base de datos de esteticas" )
    });

    mainRouter.use("/user", require("./User"))
    mainRouter.use("/services", require("./services"))
    mainRouter.use("/booking", require("./Booking"))
    mainRouter.use("/reviews", require("./Reviews"))


    mainRouter.use((req, res) =>{
        res.status(404).send(`La ruta no pudo ser encontrada intente mas tarde: ${req.method} ${req.originalUrl}`)
    })

    module.exports = mainRouter;