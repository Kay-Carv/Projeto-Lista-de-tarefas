//Declarar variavel como array

//let tarefas =[]; //[] array
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //Traz dados já cadastrados no localStorage ou cria lista vazia



//Função para gravar os dados (As tarefas no local storage)

function salvarTarefas(){
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
}

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
        salvarTarefas();
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
    salvarTarefas();
}

//Deixar visivel a lista no local storage
//Inicialisa a lista e carrega todos os dados
listarTarefas();