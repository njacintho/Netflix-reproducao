$('.owl-carousel').owlCarousel({
    loop:true, //em verdadeiro o loop volta ao inicio nao tem fim 
    margin:10, //entre o elemento e outro
    nav:false, //botão de navegação por setas, falso desaparece
    responsive:{ // se adapta ao tammanho da tela 
        0:{
            items:1 // quantidade de elementos por tamanho da tela
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})