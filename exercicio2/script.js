// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";



// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
console.log(minhaString.trim())

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
const minhaString1 = minhaString.trim()
console.log(minhaString1.length)

console.log(minhaString.length)

// c) Substitua os traços `________` por “sticioso”.
const minhaString2 = minhaString.replaceAll("________","sticioso")
console.log(minhaString2)

