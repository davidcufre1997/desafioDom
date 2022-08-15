
function verificar(){
    

let contraseña= document.getElementById("contra").value


let confirmar= document.getElementById("confirm").value


if (contraseña==confirmar){
alert("La contraseña es correcta. En unos segundos te llegara un mail de validacion")}

else{
    alert("La confirmacion de su contraseña es incorrecta, por favor vuelva a intentarlo")
}


}