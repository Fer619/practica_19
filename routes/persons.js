const express = require('express'); // inyección de la dependencia de Express
const router= express.Router(); // se genera la instancia de routers
const mongoose= require('../node_modules/mongoose'); // se inyecta la dependencia de mongoose
let Person = require('../models/person'); //se inyecta la dependencia del archivo person dentro de la carpeta modules

router.get('/persons', function(req,res,next){
    Person.find(function (err,persons) {
        if(err) return next(err);
        res.json(persons);
    });
});


module.exports=router;