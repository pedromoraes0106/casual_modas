var slideIndex = 1;
showSlides(slideIndex);

// Troca as imagens do carrossel
function plusSlides(n){
    showSlides(slideIndex += n);
}
// ativar as dots com base na imagem do carrossel
function currentSlides(n){
    showSlides(slideIndex = n);
}
// Ativa ou desativa as imagens do carrossel 
function showSlides(n){
    let slides = document.getElementsByClassName("fade");
    let dots = document.getElementsByClassName("dot");

    // volta o carrossel para a primeira imagem
    if(n > slides.length){
        slideIndex = 1;
    }
    /* 
    quando estiver na primeira imagem e apertar para a 
    esquerda o carrossel vai mostrar a ultima imagem da
    lista.
    */
    if(n < 1){
        slideIndex = slides.length;
    }

    //Esconder todas as imagens do carrossel
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    //removendo a sub classe active dos elementos dot
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Ativa a primeira imagem do carrossel
    slides[slideIndex-1].style.display = "block";
    // Adicionando a sub classe active na primeira dot
    dots[slideIndex-1].className += " active";

}