export default class Cliente {
    public id: string
    public nome: string
    public idade: number
    
    constructor(nome: string, idade: number, id: string = null){
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }

    static vazio() {
        return new Cliente('',0);
    }

    get thisid() {
        return this.id;
    }

    get thisnome(){
        return this.nome;
    }

    get thisidade(){
        return this.idade;
    }
}