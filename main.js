const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-04-21T13:00:00");
const tempoObjetivo2 = new Date ("2024-04-30T15:00:00");
const tempoObjetivo3 = new Date ("2024-08-10T12:00:00");
const tempoObjetivo4 = new Date ("2025-02-01T07:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

