const contactoController = require('../controllers/contactoController');

const router =require('express').Router();


router.get('/',(req,res)=>{
    /*
    console.log(req.body);
    let respuesta={tipo:20,msg:'listado de todos los contactos  '}
    res.json(respuesta);
    */
   
   console.log('get en contactos');
   contactoController.listar(req,res);
   
})

router.post('/:id',(req,res)=>{
   console.log('get en contactos con  id');
   contactoController.listar(req,res);
})

/* 
router.get('/:id',(req,res)=>{
    /*
    let respuesta={tipo:20,msg:'buscandop un solo contacto ',id:req.params.idcontactos}
    res.json(respuesta);
    */
   /*
   contactoController.buscar(req,res);
})
*/


router.post('/',(req,res)=>{
   console.log('router')
   console.log(req.body);
   console.log('//router')
   contactoController.crear(req,res);
    
})

router.delete('/',(req,res)=>{
    /*
    console.log(req.body);
    let respuesta={tipo:220,msg:'Resultado de un delete '};
    res.json(respuesta);
    */
   contactoController.borrar(req,res);
})



module.exports=router