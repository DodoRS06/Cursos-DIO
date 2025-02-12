let heroi = "Douglas";
let ganhou = 100;
let perdeu = 55;
let saldoTotal = saldoVitorias(ganhou, perdeu);
let mensagem = "O Herói tem saldo de " + saldoTotal + " está no nível de " + nivel(saldoTotal) + ".";

console.log("\nOlá " + heroi + ". Seja bem-vindo!")
console.log("------------------------------ \n")

function saldoVitorias(vitorias, derrotas){
    return vitorias - derrotas;
}

function nivel(saldo){
    let classificacao;

    if (saldo <= 10) {
        classificacao = "Ferro";
    } else if (saldo <= 20) {
        classificacao = "Bronze";
    } else if (saldo <= 50) {
        classificacao = "Prata";
    } else if (saldo <= 80) {
        classificacao = "Ouro";
    } else if (saldo <= 90) {
        classificacao = "Diamante";
    } else if (saldo <= 100) {
        classificacao = "Lendário";
    } else if(saldo >= 101){
        classificacao = "Imortal";
    } else {
        classificacao = "Desconhecida";
    }
    return classificacao;
}

console.log(mensagem)