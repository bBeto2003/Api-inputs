let router =require('express').Router();


router.get('/',(req,res)=>{
    let respuesta={tipo:20,msg:'Listado de todos lo usuarios'}
    res.json(respuesta);
})


router.get('/:idusuarios',(req,res)=>{
    
    let respuesta={tipo:20,msg:'Listado de un solo usuario'}
    res.json(respuesta);
})



module.exports=router