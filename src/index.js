let nome_heroi = "Rodriguinho da massa"
let xp_heroi = 9624
let nivel_heroi

if (xp_heroi <= 1000) { nivel_heroi = "Ferro"}
    else if (xp_heroi >= 1001 && xp_heroi <= 2000) { nivel_heroi = "Bronze"}
    else if (xp_heroi >= 2001 && xp_heroi <= 5000) { nivel_heroi = "Prata"}
    else if (xp_heroi >= 5001 && xp_heroi <= 7000) { nivel_heroi = "Ouro"}
    else if (xp_heroi >= 7001 && xp_heroi <= 8000) { nivel_heroi = "Platina"}
    else if (xp_heroi >= 8001 && xp_heroi <= 9000) { nivel_heroi = "Ascendente"}
    else if (xp_heroi >= 9001 && xp_heroi <= 10000) { nivel_heroi = "Imortal"}
    else nivel_heroi = "Radiante"


console.log("O heroi de nome " + nome_heroi + " está no nivel de " + nivel_heroi)
