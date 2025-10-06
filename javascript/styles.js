window.addEventListener("load", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.style.overflowX = "hidden";
});


document.addEventListener("DOMContentLoaded", () => {
    const btnArtigos = document.getElementById("btn-artigos");
    const artigos = document.getElementById("artigos");
    const especializacoes = document.getElementById("especializacoes");
    const blocoAbordagem = document.getElementById("abordagem");
    const secoes = document.querySelectorAll("main section");

    

    // Clicar em Artigos → mostra Artigos e esconde o resto
    btnArtigos.addEventListener("click", () => {
        secoes.forEach(sec => sec.classList.add("hidden"));
        artigos.classList.remove("hidden");
        artigos.scrollIntoView({ behavior: "smooth" });

        fecharMenuMobile();

    });

    // Clicar em Especializações → mostra Especializações e esconde o resto
    const menuEspecializacoes = document.querySelectorAll('a[href="#especializacoes"]');
    menuEspecializacoes.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            secoes.forEach(sec => sec.classList.add("hidden"));
            especializacoes.classList.remove("hidden");
            especializacoes.scrollIntoView({ behavior: "smooth" });

            fecharMenuMobile();

        });
    });

  // Clicar no link “Abordagem” dentro do menu → mostra só especializações e rola até a abordagem
const menuAbordagem = document.querySelectorAll('a[href="#abordagem"]');
menuAbordagem.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        // esconde todas as seções
        secoes.forEach(sec => sec.classList.add("hidden"));
        // mostra apenas especializacoes (onde a abordagem está dentro)
        especializacoes.classList.remove("hidden");
        // rola até o bloco da abordagem
        blocoAbordagem.scrollIntoView({ behavior: "smooth" });

        fecharMenuMobile();

    });
});


    // 🔥 Clicar nos outros links principais do menu → volta tudo normal
    const menuOutrosLinks = document.querySelectorAll(
    '#desktop_list a[href^="#"]:not([href="#especializacoes"]):not([href="#abordagem"]), ' +
    '#mobile_list a[href^="#"]:not([href="#especializacoes"]):not([href="#abordagem"])'
);

    menuOutrosLinks.forEach(link => {
        link.addEventListener("click", () => {
            secoes.forEach(sec => sec.classList.remove("hidden"));
            artigos.classList.add("hidden");
            especializacoes.classList.add("hidden");

            fecharMenuMobile();

        });
    });


// Home
ScrollReveal().reveal('.home-imagem', { origin: 'left', distance: '80px', duration: 1200 });
ScrollReveal().reveal('.home-texto', { origin: 'right', distance: '80px', duration: 1200 });

// Serviços
ScrollReveal().reveal('.coluna-esquerda', { origin: 'left', distance: '80px', duration: 1200 });
ScrollReveal().reveal('.coluna-direita', { origin: 'right', distance: '80px', duration: 1200 });

// Contato
ScrollReveal().reveal('.contato-imagem', { origin: 'left', distance: '80px', duration: 1200 });
ScrollReveal().reveal('.form-contato', { origin: 'right', distance: '80px', duration: 1200 });



    // ===== Função para fechar o menu mobile =====
function fecharMenuMobile() {
    const menuMobile = document.getElementById("menu_mobile");
    const btnMobileIcon = document.querySelector('.btn-mobile i');
    const btnMobile = document.querySelector('.btn-mobile');

    if(menuMobile.classList.contains('active')) {
        menuMobile.classList.remove('active');
        btnMobileIcon.classList.remove('fa-xmark');
        btnMobileIcon.classList.add('fa-bars');
        btnMobile.setAttribute('aria-expanded', false);
    }
}

});
