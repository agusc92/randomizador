let form = document.querySelector('#form');
let participante = document.querySelector("#part");
let participantes = [];
let listaPart= document.querySelector(".lista-participantes");
let errorBox = document.querySelector(".error-box");
let botonSortear = document.querySelector("#botonSortear");
let resultado = document.querySelector("#resultado");
let resultadoContainer = document.querySelector(".resultado-container");
let botonLimpiar = document.querySelector("#boton-limpiar");
// let participanteAgregar = document.querySelector('')
form.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    partNombre = (participante.value).trim()
    if(partNombre == ""){
        campoError("vacio")
        return
    }else{
        errorBox.classList.add("blind");
    }
    if(comprobar(partNombre)){return}
   
    participantes.push(partNombre);
    
    

    imprimirParticipantes(participantes)
    
})
imprimirParticipantes =(parti)=>{
    participante.value ="";
    listaPart.innerHTML="";
    parti.forEach(p=>{
        listaPart.innerHTML+=`<li> ${p} <button class="boton-borrar" data-ref="${p}">x</button> </li>`;
    })
    let botonesBorrar = [...document.querySelectorAll(".boton-borrar")];
    botonesBorrar.forEach((boton)=>{
        boton.addEventListener("click",()=>{
            borrarParticipante(boton.dataset.ref)
        })
    })
}

comprobar=(participante)=>{
    let pasa = false;
    pasa = participantes.includes(participante)
    if(pasa){
        campoError("repetido");
    }else{
        errorBox.classList.add("blind");
    }
    return pasa;
}

borrarParticipante = (participante)=>{
   participantes=  participantes.filter(parti =>parti !=participante )
   imprimirParticipantes(participantes)
}
campoError=(mensaje)=>{
    errorBox.textContent = mensaje;
    errorBox.classList.remove("blind");
}

botonSortear.addEventListener("click",(event)=>{
    if(participantes.length<=0){
        return
    }
    let num =0;
    let result ="";
    num = Math.floor(Math.random()*participantes.length)
    console.log(num);
    result = participantes[num];
    resultado.innerHTML = `<img src="media/papel-picado.png" alt="" class="img-resultado"> ${result} 
                            <img src="media/papel-picado.png" alt="" class="img-resultado">
                            `;
     
    
    botonLimpiar.classList.remove("blind");
    botonLimpiar.addEventListener("click",()=>{limpiar()});
})

limpiar =()=>{
        while (resultado.firstChild) {
            resultado.removeChild(resultado.firstChild);
        }
    botonLimpiar.classList.add("blind");
    
}

