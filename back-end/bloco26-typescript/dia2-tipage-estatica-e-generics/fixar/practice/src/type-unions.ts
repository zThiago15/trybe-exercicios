// Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
type liquid = 'líquido';
type solid = 'sólido';
type gas = 'gasoso';

const water: liquid | solid | gas = 'gasoso';
console.log(water);


// Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
type cpf = number | string;

const myCpf: cpf = '231.452.543-54';
const numCpf: cpf = 1124344353;
console.log(myCpf, numCpf);

// Crie um type union que represente sistemas operacionais: linux, mac os ou windows.

type os = 'linux' | 'mac' | 'windows';
const myOs: os = 'linux';
console.log(myOs);

// Crie um type union que represente as vogais do alfabeto.
type vowels = 'a' | 'e' | 'i'| 'o' | 'u';
const lastNameVowel: vowels = 'o';
console.log(lastNameVowel);
