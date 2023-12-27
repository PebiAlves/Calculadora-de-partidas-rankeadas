console.log("### Calculadora de Partidas Rankeadas ###")

let user = "Pebi"
let win = 0
let defeat = 0
let statusMatches = 0

console.log(user + " ganhou 10 partidas e perdeu 5")
win = 10
defeat = 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

console.log(user + " ganhou 11 partidas e perdeu 5")
win = win +11
defeat = defeat + 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

console.log(user + " ganhou 20 partidas e perdeu 5")
win = win +20
defeat = defeat + 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

console.log(user + " ganhou 30 partidas e perdeu 5")
win = win +30
defeat = defeat + 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

console.log(user + " ganhou 40 partidas e perdeu 5")
win = win +40
defeat = defeat + 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

console.log(user + " ganhou 11 partidas e perdeu 5")
win = win +11
defeat = defeat + 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

console.log(user + " ganhou 11 partidas e perdeu 5")
win = win +11
defeat = defeat + 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

console.log(user + " ganhou 11 partidas e perdeu 5")
win = win +11
defeat = defeat + 5
statusMatches = rankedMatchesCal(win, defeat)
levelUser(statusMatches, user)

function rankedMatchesCal(win, defeat) {
    result = win - defeat
    return result
}
function levelUser(statusMatches, user) {
    if (statusMatches <= 10) {
        console.log("O " + user + " tem o saldo de " + statusMatches + " está no nível de ferro")
    }
    else if (statusMatches <= 20) {
        console.log("O " + user + " tem o saldo de " + statusMatches + " está no nível de bronze")
    }
    else if (statusMatches <= 50) {
        console.log("O " + user + " tem o saldo de " + statusMatches + " está no nível de prata")
    }
    else if (statusMatches <= 80) {
        console.log("O " + user + " tem o saldo de " + statusMatches + " está no nível de ouro")
    } else if (statusMatches <= 90) {
        console.log("O " + user + " tem o saldo de " + statusMatches + " está no nível de diamante")
    }
    else if (statusMatches <= 100) {
        console.log("O " + user + " tem o saldo de " + statusMatches + " está no nível de lendário")
    }
    else {
        console.log("O " + user + " tem o saldo de " + statusMatches + " está no nível de imortal")
    }
}
