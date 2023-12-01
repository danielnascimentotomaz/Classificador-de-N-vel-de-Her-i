
let momeHeroi = ""
let xp;



function calcularNomeHeroi(xp) {
    let nomeHeroi;

    if (xp <= 1000) {
        nomeHeroi = "Ferro";
    } else if (xp > 1000 && xp <= 2000) {
        nomeHeroi = "Bronze";
    } else if (xp > 2000 && xp <= 5000) {
        nomeHeroi = "Prata";
    } else if (xp > 6000 && xp <= 7000) {
        nomeHeroi = "Ouro";
    } else if (xp > 7000 && xp <= 8000) {
        nomeHeroi = "Platina";
    } else if (xp > 8000 && xp <= 9000) {
        nomeHeroi = "Ascendente";
    } else if (xp > 9000 && xp <= 10000) {
        nomeHeroi = "Imortal";
    } else if (xp > 10000) {
        nomeHeroi = "Radiante";
    }

    return nomeHeroi;
}

xp = 7500;
let heroName = calcularNomeHeroi(xp);
console.log("O Herói de nome " + heroName + " está no nível de " + xp); 







