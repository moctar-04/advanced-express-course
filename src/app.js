//Appeller express
const express = require('express');
//Instancier l'application avec
const app = express() ; 


// API Restful à mettre en oeuvre CRUD ==> GET/POST/DELETE/PUT/PATCH


//GET
app.get('/', async (req,res) =>{
    res.json("Welcome to the AWC : Master 2 ");
    //console.log("GETting is OK") ;
}
);

//GET
app.get('/users', async (req,res) =>{
    res.json("GETting is OK");
    //console.log("GETting is OK") ;
}
);




//Demarrge de l'appli sur un port defini par défaut ou à travers
// la valeur dans .env

module.exports = app ;
if(require.main === module){
    const PORT = process.env.PORT || 3000 ;

    app.listen(PORT, () =>{
    console.log(`Serveur démarré sur le port ${PORT}`);
    });
}
