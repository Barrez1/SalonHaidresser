$(document).ready(function() { /* instruçao jquery = inicia script somente quando o doc estiver pronto = carregar todo*/
    //progress bar
    let containerA = document.getElementById("circleA");

    /*objeto de circulo da biblioteca (progress roller)
    com as caracteristicas que ele precisa 
    */
    let circleA = new ProgressBar.Circle(containerA, {
    //objetos internos para limitar area 
        color: '#65DAF9',
        strokeWidth: 8, //largura do circulo
        duration: 1400,
        from: { color: '#AAA'}, //inicia com essa cor
        to: { color: '#65DAF9'}, //termina com essa cor

        //Animaçao do circulo = da BIBLIOTECA
        step: function(state, circle) { //state e circle = funçao que eu passei
            circle.path.setAttribute('stroke', state.color);//parte da biblioteca que precisa para criar um circulo animado (js)
            
            let value = Math.round(circle.value() * 250);

            circle.setText(value);
        }
    });

    let containerB = document.getElementById("circleB");
    let circleB = new ProgressBar.Circle(containerB, {
        
        color: '#65DAF9',
        strokeWidth: 8, 
        duration: 1600,
        from: { color: '#AAA'}, 
        to: { color: '#65DAF9'}, 

        step: function(state, circle) { 
            circle.path.setAttribute('stroke', state.color); 
            
            let value = Math.round(circle.value() * 15);

            circle.setText(value);
        }
    });

    let containerC = document.getElementById("circleC");
    let circleC = new ProgressBar.Circle(containerC, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1800,
        from: { color: '#AAA'}, 
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() * 32);

            circle.setText(value);
        }
    });

    let containerD = document.getElementById("circleD");
    let circleD = new ProgressBar.Circle(containerD, {
        
        color: '#65DAF9',
        strokeWidth: 8,
        duration: 2200,
        from: { color: '#AAA'},
        to: { color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
             let value = Math.round(circle.value() * 1000);

            circle.setText(value);
        }
    });


    //iniciando o loader quando o usuario chega no elemento
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;   // stop serve para a animação não carregar mais que uma vez

    $(window).scroll(function (e) { //parametro de evento
        let scroll = $(window).scrollTop(); 
        
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {//-500px = na parte da pag que ta esse scroll
            //'disparando = pra começar 
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    }); 


    //parallax = imagem fixa =  ja ta prontopq eu importei no começo
    setTimeout(function() { //pra carregar as imagens da pagina primeiro (Evita bugs)
        
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});

    }, 250); //250 milesimos



//filtro do portfolio

$('.filter-btn').on('click', function(){

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

        if(type == 'dsg-btn'){
            eachBoxes('dsg', boxes)
        } else if(type == 'dev-btn'){
            eachBoxes('dev',boxes);
        }else if(type =='seo-btn'){
            eachBoxes('seo',boxes);
        }else {
            eachBoxes('all',boxes);
        }

 });

 function eachBoxes(type, boxes){
    if(type == 'all'){
        $(boxes).fadeIn();
    }else{
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow');
            }else {
                $(this).fadeIn();
            }
        })
    }
 }

});
