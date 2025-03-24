class Professor extends Pessoa {
    falar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e leciono ${this.disciplina}.`);
    }

    disciplina;

    constructor(nome, idade, CPF, disciplina) {

        super(nome,idade,CPF);

        this.disciplina = disciplina;
    
    }
}
Professor1 = new Professor ("jose",32,"123.478.456-99","DS");
Professor2 = new Professor ("maria",25,"987.654.321-00","Historia");
