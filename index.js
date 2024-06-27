const server = require("./src/server");

const { conn } = require("./src/db")
const PORT  = process.env.PORT;

conn.sync({ force: true }).then(() =>{
    server.listen(PORT, () =>{
        console.log(`server en el puerto ${PORT}`);
    })
})