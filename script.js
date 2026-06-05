// Este script é opcional.
// Ele serve para demonstrar como o spinner seria "ocultado" após um carregamento real.

document.addEventListener("DOMContentLoaded", () => {
    // Simulando um tempo de carregamento de 3 segundos
    setTimeout(() => {
        const loader = document.querySelector(".loader-container");
        
        // Esconde o spinner após o carregamento
        if (loader) {
            loader.style.display = "none";
            // Aqui você adicionaria o código para exibir o conteúdo real da página
            // console.log("Carregamento concluído!");
        }
    }, 3000); // 3000 milissegundos = 3 segundos
});
