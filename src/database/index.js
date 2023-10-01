const mongoose = require('mongoose')

function connect() {

    //Faz a conexão entre o Node.js e o MongoDB
    mongoose.connect('mongodb://127.0.0.1:27017/primeiro-projeto')
    
  
    //------------OBSERVAÇÂO!!--------------
    //Essa string connection do video de thiago não funcionou,
    //então peguei essa de um vídeo no youtube :D
    //---------FIM DA OBSERVAÇÂO!!-----------
    
    const db = mongoose.connection
    //Uma vez conectado...
    db.once('open', () => {
        console.log('Connected to database!')
    })
    //Em erro...
    db.on('error', console.error.bind(console, 'Connection error: '))

}    
//Exportando esse módulo
module.exports = {
    connect    
}