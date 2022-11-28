let router =require('express').Router();


router.get('/',(req,res)=>{
    console.log(req.body);
    let respuesta={tipo:20,msg:'listado de todos los clientes '}
    res.json(respuesta);

})

router.put('/:idUser',(req,res)=>{
    res.json({tipo:220,msg:'resultado de un put'});
})

router.get('/:idUser',(req,res)=>{
    let respuesta={tipo:20,msg:'buscandop un solo cliente ',id:req.params.idUser}
    res.json(respuesta);
})



router.post('/',(req,res)=>{
    console.log(req.body);
    let respuesta={tipo:220,msg:'Resultado de un post'};
    res.json(respuesta);
})



module.exports=router