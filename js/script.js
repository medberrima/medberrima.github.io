    //click on navbar toggler
    // $('.navbar-toggler').on('click',function(){
    //     $('.navbar-toggler .one').toggleClass('top');
    //     $('.navbar-toggler .two').toggleClass('hidden');
    //     $('.navbar-toggler .three').toggleClass('bottom');
    // })

    
    // Adjust Slider Height
    var winH    = $(window).height();
    $('.slider, .carousel-item').height(winH );


    //smooth scroll
    $('nav li a').on('click',function(){
        //add class active when scroll
        $(this).addClass('active').parent().siblings().find('a').removeClass('active') ;
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80 
        })
    })

    
    prevScrollpos = window.pageYOffset;
    $(window).scroll(function(){

        //scroll navbar 
        var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > currentScrollPos){
            $('nav').css({'top' : '0','transition': '.3s'})
        }else{
            $('nav').css({'top' : '-125px' ,'transition': '.3s'})
        }
        prevScrollpos = currentScrollPos;

        // skills bar 
        const progressBars= document.querySelectorAll('.progress-bar') ;
        if($(window).scrollTop() >= ($('.skills').offset().top - 100) ){
            progressBars.forEach((progress,index)=>{
                const target=progress.getAttribute('data-target')
                progress.style.width =target
                progress.style.transition= '2s';
            });
        }

        //button up index
        if($(window).scrollTop() >= ($('.services').offset().top - 200)){
            $('.up').fadeIn(800)
        }else{$('.up').fadeOut(800)}
    })

    //click button up
    $('.up').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500)
    })


    //venobox
    $('.venobox').venobox();


    //mix it up
    var mixer = mixitup('.gallary');

    //add class active portfolio menu
    $('.menu ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    // portfolio  view more
    // $(".portfolio .more").css('display', "none");
    // $('.view').click(function(){
    //     if($(".portfolio .more").css('display')  == "none"){
    //         $(".portfolio .more").css('display', "inline");
    //         $(".portfolio .view").html('view less');
    //     }else{
    //         $(".portfolio .more").css('display', "none");
    //         $(".portfolio .view").html('view more');
    //     }
    // })

    //switch between style 
    $('.nav-mode').on('click', function () {       
        var link = $('link[data-color="switch"]');
        
        if (link.attr('href') == 'css/light.css') {
            link.attr('href', 'css/dark.css') 
            $(".nav-mode .fas").removeClass('fa-moon').addClass('fa-sun');           
        } else {
            link.attr('href', 'css/light.css') 
            $(".nav-mode .fas").removeClass('fa-sun').addClass('fa-moon');           
        }
    })
