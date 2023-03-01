/**
 * Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
 * SP - R$67.836,43
 * RJ - R$36.678,66
 * MG - R$29.229,88
 * ES - R$27.265,48
 * Outros - R$19.849,53
 * Escreva um programa onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
 */
var faturamentoTotal = 0;

const faturamentomensal = [
  {
    "estado": "SP",
    "faturamento": 67836.43,
    "representacao" : "0%"
  },
  {
    "estado": "RJ",
    "faturamento": 36678.66,
    "representacao" : "0%"
  },
  {
    "estado": "MG",
    "faturamento": 29229.88,
    "representacao" : "0%"
  },
  {
    "estado": "ES",
    "faturamento": 27165.48,
    "representacao" : "0%"
  },
  {
    "estado": "outros",
    "faturamento": 19849.53,
    "representacao" : "0%"
  }
]

//Faz a soma total do faturamento.
faturamentomensal.map((x) => {
  faturamentoTotal += x.faturamento;
})

//Formata o faturamento total em 2 casas decimais.
faturamentoTotal = faturamentoTotal.toFixed(2);

//Calcula o % de representacão de cada estado.
faturamentomensal.map((x) => {
  x.representacao = ((x.faturamento.toFixed(2) / faturamentoTotal) * 100).toFixed(2).toString()  + ' %';
})

//Resultado
console.log(faturamentomensal)

