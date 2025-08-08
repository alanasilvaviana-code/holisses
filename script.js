const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma manhã de verão, você acorda com um mapa misterioso em sua mesa. Ele parece levar a um tesouro perdido. O que você faz?",
        alternativas: [
            {
                texto: "Ignoro o mapa e continuo com minha rotina normal.",
                afirmacao: "Você decide que a vida real é mais importante que uma fantasia."
            },
            {
                texto: "Sigo as instruções do mapa e começo a aventura!",
                afirmacao: "Você escolhe o caminho da aventura e da emoção."
            }
        ]
    },
    {
        enunciado: "Sua jornada te leva a uma floresta densa e escura. Você encontra uma bifurcação. Um caminho é iluminado pelo sol, o outro é sombrio e cheio de mistérios. Qual você escolhe?",
        alternativas: [
            {
                texto: "O caminho iluminado, é mais seguro.",
                afirmacao: "Você prefere a segurança ao desconhecido."
            },
            {
                texto: "O caminho sombrio, o perigo é mais excitante.",
                afirmacao: "Você abraça o desafio e a curiosidade te guia."
            }
        ]
    },
    {
        enunciado: "Após uma longa caminhada, você chega a uma caverna. A entrada está bloqueada por uma grande pedra. Como você tenta movê-la?",
        alternativas: [
            {
                texto: "Procuro uma alavanca para mover a pedra.",
                afirmacao: "Você usa a inteligência para superar o obstáculo."
            },
            {
                texto: "Tento empurrar a pedra com todas as minhas forças.",
                afirmacao: "Você confia na sua força bruta para resolver o problema."
            }
        ]
    },
    {
        enunciado: "Dentro da caverna, você encontra uma caixa de madeira antiga. Ao abri-la, você encontra um pergaminho com a mensagem: 'O verdadeiro tesouro não é o ouro, mas a jornada'. Qual a sua reação?",
        alternativas: [
            {
                texto: "Fico desapontado e sinto que perdi meu tempo.",
                afirmacao: "Você se sente frustrado, pois esperava algo material."
            },
            {
                texto: "Entendo a mensagem e me sinto realizado pela aventura.",
                afirmacao: "Você valoriza a experiência acima de qualquer recompensa material."
            }
        ]
    },
    {
        enunciado: "Ao retornar para casa, seus amigos te perguntam sobre a sua aventura. O que você conta?",
        alternativas: [
            {
                texto: "Conto a eles sobre a jornada e o significado do tesouro.",
                afirmacao: "Você compartilha a lição que aprendeu e inspira seus amigos."
            },
            {
                texto: "Digo que não encontrei nada e mantenho a experiência para mim.",
                afirmacao: "Você guarda a experiência como um segredo, uma memória só sua."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final da jornada...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
