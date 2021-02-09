    //click on navbar toggler
    $('.navbar-toggler').on('click',function(){
        $('.navbar-toggler .one').toggleClass('top');
        $('.navbar-toggler .two').toggleClass('hidden');
        $('.navbar-toggler .three').toggleClass('bottom');
    })




    //smooth scroll
    $('nav li a').on('click',function(){
        //add class active when scroll
        $(this).addClass('active').parent().siblings().find('a').removeClass('active') ;
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80 
        })
    })


    //mix it up
    var mixer = mixitup('.gallary');

    //add class active portfolio menu
    $('.menu ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    
    $(window).scroll(function(){

        //scroll navbar 
        if($(window).scrollTop() >= 200){
            $('nav').css({
                'padding' : '0.5rem 1rem'
            })
        }
        else{
            $('nav').css({
                'padding' : '1rem'
            })
        }
        // skills bar 
        const progressBars= document.querySelectorAll('.progress-bar') ;
        if($(window).scrollTop() >= ($('.skills').offset().top - 200) ){
            progressBars.forEach((progress,index)=>{
                const target=progress.getAttribute('data-target')
                progress.style.width =target
                progress.style.transition= '2s';
            });
        }

        //button up
        if($(window).scrollTop() >= ($('.services').offset().top - 200)){
            $('.up').fadeIn(800)
        }else{
            $('.up').fadeOut(800)
        }
    })

    //click button up
    $('.up').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500)
    })


    //venobox
    $('.venobox').venobox();


    // portfolio  view more
    $(".portfolio .more").css('display', "none");
    $('.view').click(function(){
        if($(".portfolio .more").css('display')  == "none"){
            $(".portfolio .more").css('display', "inline");
            $(".portfolio .view").html('view less');
        }else{
            $(".portfolio .more").css('display', "none");
            $(".portfolio .view").html('view more');
        }
    })