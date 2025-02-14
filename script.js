function ToggleMenu(){
    const menu = document.querySelector(".menu-info");
    const icone = document.querySelector(".hamburguer-icone");
    menu.classList.toggle("open");
    icone.classList.toggle("open");
}

document.querySelectorAll('a.info').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Remove o '#' do href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Suaviza o scroll
                block: 'start' // Posiciona no início da seção
            });
        }
    });
});
