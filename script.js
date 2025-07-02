const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Ao fazer compras no supermercado, qual das seguintes atitudes melhor te descreve?",
        alternativas: [
            {
                texto: " Comprador(a) Consciente",
                afirmacao: "Você costuma fazer uma lista antes de sair de casa e se esforça para comprar apenas o necessário, evitando promoções que te levariam a adquirir mais do que realmente precisa. Sua despensa e geladeira são bem organizadas e você sabe o que tem."
            },
            {
                texto: "Comprador(a) Impulsivo(a)",
                afirmacao: "Você se sente atraído(a) por ofertas e muitas vezes compra mais do que planejava, especialmente itens que talvez não use antes que estraguem. Sua geladeira e despensa podem ter alguns "tesouros escondidos" que você esqueceu."
            }
        ]
    },
    {
        enunciado: "Sobras de refeições são um desafio para você?",
        alternativas: [
            {
                texto: "Mestre das Sobras",
                afirmacao: "Você adora transformar sobras em novas e deliciosas refeições, ou as congela para consumo posterior. Para você, nada se perde, tudo se transforma!"
            },
            {
                texto: "Despreocupado(a) com Sobras",
                afirmacao: "Você tende a jogar fora as sobras que não foram consumidas imediatamente. A ideia de "dar um jeito" nas sobras não é algo que te ocorre com frequência.
            }
        ]
    },
    {
        enunciado: " Quando percebe que um alimento está próximo da validade, qual é sua reação?",
        alternativas: [
            {
                texto: "Otimizador(a) de Alimentos",
                afirmacao: "Você imediatamente pensa em formas de usar aquele alimento, seja cozinhando-o, congelando-o ou oferecendo-o a alguém que possa consumi-lo a tempo."
            },
            {
                texto: "Descartador(a) Rápido(a)",
                afirmacao: "Você tende a jogar fora alimentos que estão perto do vencimento por precaução, mesmo que ainda pareçam bons para consumo."
            }
        ]
    },
    {
        enunciado: "Como você lida com frutas, legumes e verduras que não estão "perfeitos" esteticamente?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();