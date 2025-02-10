//Declarar variavel como array

let tarefas =[]; //[] array

//Criar função que valida o preenchimento do campo caso esteja vazio

/*function validarCampo(){
    let valida = false;
    if(document.getElementById("task").value == "") valida =true;
    return valida; 
}*/

//Arrow function
const validarCampo=()=>{
    let valida = false;
    if(document.getElementById("task").value == "") valida =true;
    return valida; 
}
