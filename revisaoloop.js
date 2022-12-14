let nave = prompt("Digite o  nome da espaçonave")

let invert = ""

for(let i = nave.length - 1; i >= 0; i--){
if(nave[i] == "e"){
    break
}
invert += nave[i]
}

alert("Nome original da nave: " + nave + "\nNome após ocultação: " + invert)