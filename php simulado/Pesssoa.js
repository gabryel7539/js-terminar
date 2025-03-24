class Pessoa {
    #nome; 
    idade;
    CPF;

    constructor(nome, idade, CPF) {
        this.#nome = nome; 
        this.idade = idade;
        this.CPF = CPF;
    }

   
    getNome() {
        return this.#nome;
    }

  
}


