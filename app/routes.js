// import modules 
const express = require('express');
const path = require('path');


// Create a router object 
const router = express.Router();

// export our router
module.exports = router;


//route to HOME
router.get('/', function(req, res){
    res.render('pages/index');
});

router.get('/Maya', function(req, res){
    res.render('pages/Maya');
});

router.post('/home', function(req, res){
    var palabra = req.body.palabra1;

    function Traducir(){
        var EM = [];
        EM[0]= maya[espanol.indexOf(palabra)];
        return EM.join("");
    }
    var espanol = ["gracias","sol","luna","listo","ayer","ayudar","maya","danza","abrazo","perro","serpiente","plato","vaso","tortilla","gato","papel","baño","libro","escuela","casa","hermano","primo","gobierno","presidente","ciudad","cuarto","camión","bicicleta","taza","cocina","comal","zapatos"];
    var maya = ["nib'oolal","k’iin","uj","séeb","jo’olej","aantaj","maaya t’aan"," óok’ot","lóoch","Peek","kaano","lako","vaso","waaj","miiso","ju'un","baño","áanalte","xook","najo","suku'un","ka'a suku'un","jala'acho'","jo'olpóopo","noj","nal","kisbuuts'o","t'íinche'balak","lak","k'óoben","jaanal","xanab"];  
    console.log(Traducir());
    const mensaje = {message: "Palabra en Maya: "+ Traducir()};
res.render('pages/result',{mens: mensaje});
});

router.post('/maya', function(req, res){
    var palabra = req.body.palabra1;

    function Traducir(){
        var EM = [];
        EM[0]= espanol[maya.indexOf(palabra)];
        return EM.join("");
    }
    var espanol = ["gracias","sol","luna","listo","ayer","ayudar","maya","danza","abrazo","perro","serpiente","plato","vaso","tortilla","gato","papel","baño","libro","escuela","casa","hermano","primo","gobierno","presidente","ciudad","cuarto","camión","bicicleta","taza","cocina","comal","zapatos"];
    var maya = ["nib'oolal","k’iin","uj","séeb","jo’olej","aantaj","maaya t’aan"," óok’ot","lóoch","Peek","kaano","lako","vaso","waaj","miiso","ju'un","baño","áanalte","xook","najo","suku'un","ka'a suku'un","jala'acho'","jo'olpóopo","noj","nal","kisbuuts'o","t'íinche'balak","lak","k'óoben","jaanal","xanab"];
        
    console.log(Traducir());
    const mensaje = {message: "Palabra en Maya: "+ Traducir()};
res.render('pages/result',{mens: mensaje});
});