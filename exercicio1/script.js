// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    
// Você deve usar apenas um `console.log()` para isso

let nome = prompt("Me diga o seu nome")
let comida1 = prompt("Qual é a sua comida favorita?")
let comida2 = prompt ("E a sua segunda comida favorita, qual é?")
let comida3 = prompt ("Agora para que eu faça um top3, me diga mais uma comida favorita sua")

console.log(`Estas sao as comidas favoritas de ${nome} \n - ${comida1} \n - ${comida2} \n - ${comida3}`)