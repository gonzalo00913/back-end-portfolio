const server = require('./controllers/server')

const PORT = 3001
server.listen(PORT, () =>{
    console.log(`servidor inicado en el puerto ${PORT}`);
})
