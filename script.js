
 const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere: salvar muitas pessoas de um ataque alienigina ou matar muitas pessoas com alinigenas sem nenhuma recompensa ",
        alternativa: [
            {
                texto: "está ocorrendo um incendio na sua escola, e alguem não consegue sair do local, mas você decide ajudar",
                afirmacao: "você ajuda ela a escapar do incêndio, e vocês saem sem se machucar",
            },
            {
                texto: "sua mãe esta discutindo com você sobre seu futuro na faculdade, mas ela não de dar opção de escolha, por causa da questão financeira, no qual ela que vai pagar",
                afirmacao:"voce prefere não fazer nenhum curso sem nenhuma garantia de empregabilidade, sendo expulso de casa"
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "seu õnibus quebrou e vcoe ta atrasada para a escola, mas um estranho de oferece carona, para ir no jadim botanico e conhecer várias briofitas",
                afirmacao: "voce prefere aceita, com probababilidade da pessoa te sequestrar ou ir andando para escola do cabral até o estadual do paraná, para estudar sobre briófitas",
            },
            {
                texto: "Voce tirou nota baixa no boletim na materia que voce estava estudando sobre gimnospermas um tipo planta, e esá com medo de contar para sua mãe, porque você tem certesa que ela vai surtar",
                afirmacao: "você prefere contar para ela ou não contar, mas quando ela descubrir, vai ser pior porque não tinha contado antes",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [ "ajudar milhares de pessoas com uma tecnologia que pssibiltaria ninguyem mais passa fome, ou lucrar com essa tecnolgia que so beneficiaria voce, e quem você quiser"
            {
                texto: "alunos de escolas não estão conseguindo acessar um site da escola para realizar uma atividade, mas voce tem a solução tecnológica para o problema,",
                afirmacao: "voce prefere ajudar elas, ou não, e com iss só voce se beneficiaria nessa situação"
            },
            {
                texto: "Altenativa 6",
                afirmacao: "Afirmação 6",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addventListener("click",()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.alternativas;
    historiaFinal += afirmacoes + " ";
    atual ++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPerguntas();
