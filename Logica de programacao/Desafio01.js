let heroi = ["Douglas", 500];
let classificacao = "";
let incrementoDeXP = 1000;

console.log("\n Olá " + heroi[0] + ", seu nível de XP inicial é " + heroi[1] + ".")
console.log("----------------------------------------------- \n")

while (heroi[1] < 9000) {
    if (heroi[1] < 1000) {
        classificacao = "Ferro";
    } else if (heroi[1] < 2000) {
        classificacao = "Bronze";
    } else if (heroi[1] < 5000) {
        classificacao = "Prata";
    } else if (heroi[1] < 7000) {
        classificacao = "Ouro";
    } else if (heroi[1] < 8000) {
        classificacao = "Platina";
    } else if (heroi[1] < 9000) {
        classificacao = "Ascendente";
    } else {
        classificacao = "desconhecida";
    }

    if(classificacao === "Ascendente"){
        console.log("O Herói de nome " + heroi[0] + " está no nível de " + classificacao + ".");
    }else{
        console.log("O Herói de nome " + heroi[0] + " está no nível de " + classificacao + ".");
        console.log("O Herói ganhou 1000XP! \n");
    }
    
    heroi[1] += incrementoDeXP;
}