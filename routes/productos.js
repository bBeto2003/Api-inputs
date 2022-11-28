
let router =require('express').Router();


router.get('/',(req,res)=>{
    let respuesta={tipo:20,msg:'Listado de todos lo productos'}
    res.json(respuesta);
})

router.get('/:idproductos',(req,res)=>{
    
    let respuesta={tipo:20,msg:'Listado de un solo producto',id:req.params.idproductos }
    
    res.json(respuesta);
})
//nombre,cantidad,precio,costo
module.exports=router