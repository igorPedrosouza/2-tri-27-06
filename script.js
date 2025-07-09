const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao fazer compras no supermercado, qual das seguintes atitudes melhor te descreve?",
        alternativas: [
            {
                texto: "Comprador(a) Consciente!",
                afirmacao: "Você costuma fazer um lista antes de sair de casa e se esforça para comprar apenas o necessário, evitando promoções que te levariam a adquirir mais do que realmente precisa. Sua despensa e geladeira são bem organizadas e você sabe o que tem."
            },
            {
                texto: "Comprador(a) Impulsivo(a)!",
                afirmacao: "Vocẽ se sente atraído(a) por ofertas e muitas vezes compra mais do que planejava, especialmente itens que talvez não use antes que estraguem. Sua geladeira e despensa podem ter alguns 'tesouros escondidos' que você esqueceu."
            }
        ]
    },
    {
        enunciado: "Sobras de refeições são um desafio para você?",
        alternativas: [
            {
                texto: "Mestre das sobras.",
                afirmacao: "Você adora transformar sobras em novas e deliciosas refeições, ou as congela para cotumo posterior. Para você, nada se perde, tudo se transforma."
            },
            {
                texto: "Despreocupado(a) com Sobras.",
                afirmacao: "Você tende a jogar fora as sobras que não foram consumidas imediatamente. A ideia de 'dar um jeito' nas sobras não é algo que te ocorre com frequência."
            }
        ]
    },
    {
        enunciado: "Quando percebe que um alimento está próximo da validade, qual é a sua reação?",
        alternativas: [
            {
                texto: "Otimizador(a) de Alimentos.",
                afirmacao: "Vocẽ imediatamente pensa em formas de usar aquele alimento, seja cozinhando, congelando ou oferecendo a alguém que possa consumi-lo a tempo."
            },
            {
                texto: "Descartador(a) Rápido(a).",
                afirmacao: "Você tende a jogar fora o alimentos que estão perto do vencimento por preucação,mesmo que ainda pareça bons para consumo."
            }
        ]
    },
    {
        enunciado: "Como você lida com frutas,legumes e verduras que não estão perfeitos?",
        alternativas: [
            {
                texto: "Consumidor(a) sem Preconceito.",
                afirmacao: "Você entende que a aparência não interfere no sabor ou na qualidade nutricional e compra esses alimentos sem hesitação, sabendo que pode usá-los em diversas preparações."
            },
            {
                texto: "Apreciador(a) da Perfeição.",
                afirmacao: "Você geralmente evita comprar frutas, legumes e verduras que não estão com a aparência impécavel, preferindo apenas os 'bonitos' e sem imperfeições."
            }
        ]
    },
    {
        enunciado: "Qual das afirmações a seguir melhor descreve sua atitude geral em relação ao planejamento de refeições? ",
        alternativas: [
            {
                texto: "Planejador(a) Estratégico(a).",
                afirmacao: "VocÊ costuma planejar suas refeições com antecedência, o que te ajuda a comprar apenas o necessário e a evitar desperdícios. Você se sente no controle do que come e do que compra"
            },
            {
                texto: "Aventureiro(a) Culinário(a) espontâneo.",
                afirmacao: "Você prefere decidir o que comer na hora, o que às vezes resulta em compras desnecessárias ou alimentos esquecidos que acabam estragando."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
