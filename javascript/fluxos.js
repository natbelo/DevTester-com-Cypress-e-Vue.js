// var x = 20

// console.log(x > 20)

// if (x > 20){
//     console.log("Eu só vejo essa mensagem se x for maior que 20.")
// } else {
//     console.log("Eu só vejo essa mensagem quando x for menor que 20")
// }

document.getElementById("barman").addEventListener("click", processaBarman)


function processaBarman(){

    var idade = document.querySelector("input[name=idade]").value

    var mensagem = document.getElementById("mensagem")

    // if(idade >= 18){
    //     // console.log("Você pode beber cerveja")
    //     mensagem.innerHTML = "Você pode beber cerveja"
    // } else if(idade > 15) {
    //     // console.log("Aceita um suquinho?")
    //     mensagem.innerHTML = "Aceita um suquinho?"
    // } else {
    //     mensagem.innerHTML = "Aceita um copo de leite?"
    // }

    switch (true) {
        case idade >= 18:
            mensagem.innerHTML = "Você pode beber cerveja"
            break;
        
        case idade > 15:
            mensagem.innerHTML = "Aceita um suquinho?"
            break;
    
        case idade >= 1:
            mensagem.innerHTML = "Aceita um copo de leite?"
            break;
    
        default:
            mensagem.innerHTML = "Valor incorreto"
            break;
    }

}



