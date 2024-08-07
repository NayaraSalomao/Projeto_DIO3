//Resolução do desafio DIO -Classe herói

//Mostrar mensagem após o usuário logar
console.log("Olá, Herói!")
console.log("Escolha o seu personagem entre um dos personagens abaixo para continuar!")
//Criar classe para cadastrar todos os heróis, acresentar o nome, idade e tipo
class hero{ 
	constructor(nome,idade,tipo){
    this.nome=nome
    this.idade=idade
    this.tipo=tipo}
//Criar método para escrever as variáveis do herói
    escrever(){
    	console.log (`O héroi ${this.nome}, tem ${this.idade} anos e usa o ataque ${this.tipo}`)}
    }
//Mostrar listagem de heróis    
let heroMago = new hero ("Mago","1000", "Magia");
let heroGuerreiro = new hero ("Guerreiro","50", "Espada");
let heroMonje = new hero ("Monje","80", "Artes Marciais");
let heroNinja = new hero ("Ninja","25", "Shuriken");

console.log (heroMago)
console.log (heroGuerreiro)
console.log (heroMonje)
console.log (heroNinja)
console.log("Parabéns! Você é:")
heroGuerreiro.escrever()
console.log("A batalha começou!")
console.log("Seus oponentes atacaram:")

console.log ("O"+ " " + heroNinja.nome + " atacou usando" + " " + heroNinja.tipo)

console.log ("O"+ " " + heroMago.nome + " atacou usando" + " " + heroMago.tipo)