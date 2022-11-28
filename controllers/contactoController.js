const mysql =require('../db/mysql');
module.exports={
    crear:(req,res)=>{
        console.log(req.body);
       // let respuesta={tipo:220,msg:'Resultado de un post'};
        mysql.query(`INSERT INTO contactos (id,nombre,celular,email,edad,activos) VALUES (?,?,?,?,?,?)`,[req.body.id,req.body.nombre,req.body.celular,req.body.email,req.body.edad,req.body.activo],(results,error,fields,)=>{
            if(error){
                res.json(error)
            }else{
                for(let i=0;i<req.body.depend.length;i++){
                mysql.query(`INSERT INTO dependientes(nombre,edad,contactos) VALUES (?,?,?)`,[req.body.depend[i].nombre,req.body.depend[i].edad,results.insertid],(results,error,fields)=>{
                    if(error){
                        res.json(error);
                    }else{
                       
                    console.log(results)
                    }
                })
               
            }}
            res.json({msg:"insertado"})
        });

    },
    listar:(req,res)=>{
        mysql.query('SELECT * FROM contactos',(respuesta,error,fields)=>{
            if(error){
                res.json(error)
            }else{
                res.json(respuesta)
            }
        })
        


        
    },
    buscar:(req,res)=>{
        mysql.query('SELECT * FROM contactos where id=?',req.params.id,(respuesta,error,fields)=>{
            if(error){
                res.json(error)
            }else{
                res.json(respuesta)
            }
        })
        
    },
  
    borrar:(req,res)=>{
        mysql.query('DELETE FROM contactos WHERE id=?',req.params.id,(respuesta,error,fields)=>{
            if(error){
                res.json(error)
            }else{
                res.json(respuesta)
            }
        })
        
    }

}   