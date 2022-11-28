const mysql      = require('../node_modules/mysql');
const mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123156',
  port      : '3306',
  database : 'programacionweb'
});
 
mysqlConnection.connect((error)=>{
  if(error){
    res.json(error)
    return
}else{
    console.log('La base de datos se conecto');
}
})
module.exports=mysqlConnection;