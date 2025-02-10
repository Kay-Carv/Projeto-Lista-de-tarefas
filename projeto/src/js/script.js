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

//Função que adiciona a tarefa

function adicionarTarefa(){
    let linhas = document.getElementById("task")

    if(validarCampo()){
        alert("Preencha o campo da tarefa")
    } else{
        tarefas.push(linhas.value)
        linhas.value="";
        listarTarefas();
    }
    document.getElementById("task").focus()
}

function listarTarefas(){
    let valor="";
    for (let i=0; i<tarefas.length; i++){
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML = valor;
}

//Função que remove a tarefa

function removerTarefa(){
    tarefas.pop();  //pop = remover do html
    listarTarefas();
}