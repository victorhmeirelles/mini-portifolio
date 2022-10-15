/* 

Objetivo - quando clicarmos na aban, temos que mostrar o conteudo da aba que foi clicada pelo usuario e esconder o conteudo da aba anterior

- passo 1 - dar um jeito de pegar os elementos que representam as abas do HTML

- passo 2 - dar um jeito de identificar o clique no elemento da aba

- passo 3 - quando o usuário clicar, desmarcar a aba selecionada

- passo 4 - marcar a aba clicada como selecionado

- passo 5 - esconder o conteúdo anterior

- passo 6 - mostrar o conteúdo da aba selecionada

*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas do HTML
const abas = document.querySelectorAll(".aba");

// passo 2 - dar um jeito de identificar o clique no elemento da aba
abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        // passo 3 - quando o usuário clicar, desmarcar a aba selecionada
        const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        // passo 4 - marcar a aba clicada como selecionado
        aba.classList.add("selecionado")

        // passo 5 - esconder o conteúdo anterior
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        // passo 6 - mostrar o conteúdo da aba selecionada
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    });
});

