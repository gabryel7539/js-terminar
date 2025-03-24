class Aluno extends Pessoa{

    RM;
    curso;

    constructor(nome,idade,CPF ,RM,curso) {
        super(nome,idade,CPF);
        this.RM = RM;
        this.curso = curso;
    }
}
Aluno1 = new Aluno("joão",14,"123.518.485-45", 12345,"Engenharia");
Aluno2 = new Aluno("maria",15,"123.518.485-46", 123, "Matemática");
Aluno3 = new Aluno("joão",14,"123.518.485-47", 12345,"Português");
Aluno4 = new Aluno("maria",15,"123.518.485-48", 123, "Historia");