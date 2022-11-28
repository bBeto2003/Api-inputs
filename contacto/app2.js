

const btnguardar = document.getElementById("btnguardar");

btnguardar.addEventListener("click",()=> {
    let nombre=document.getElementById('nombre').value;
    let celular=document.getElementById('celular').value;
    let email=document.getElementById('email').value;
    let edad=document.getElementById('edad').value;
    let activos=document.getElementById('activos').value;
    let depend=parseInt(document.getElementById('dependientes').value);
    let array=[];
    for(let i=1;i<=depend;i++){
        let nombre2=document.getElementById(`nom${i}`).value
        let edad2=document.getElementById(`edad${i}`).value
        array.push({nombre:nombre2,edad:edad2});
    }
    let resultados={
        nombre:nombre,
        celular:celular,
        email:email,
        edad:edad,
        activos:activos,
        depend:array
    }  
    console.log(resultados)
    fetch('http://localhost:3000/api/contactos/',{ 
        method:'POST',
        body:JSON.stringify(resultados),
        headers:{
            'Content-type':'application/json'
        }
    } )
    .then(res=>res.json())
    .then(resultados=>{
        console.log(resultados);
    })
   
})

const btnadd =document.getElementById('btnadd');
btnadd.addEventListener("click",()=>{
    let div=document.getElementById('newdependientes');
    let depend=parseInt(document.getElementById('dependientes').value);
    let  data='';
    for(let i=1;i<=depend;i++){
        data+=
        `
        <div id="dep${i}">
        <input type="text" id="nom${i}" name="nombre" placeholder="nombre"><input type="number" id="edad${i}" name="edad" placeholder="edad"><br>
        </div>
        `;
    }
   div.innerHTML=data;
})
