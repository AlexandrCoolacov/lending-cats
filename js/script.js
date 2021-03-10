$(document).ready(() => { 
   
    $('.headerTop__burger').click((event) => { 
        $('.headerTop__burger,.headerTop__list,.header__body').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.itemGallery__like1').click((event) => { 
        $('.itemGallery__like1').toggleClass('active');
        
    })

    $('.itemGallery__like2').click((event) => { 
        $('.itemGallery__like2').toggleClass('active');
        
    })

    $('.itemGallery__like3').click((event) => { 
        $('.itemGallery__like3').toggleClass('active');
        
    })

    $('.itemGallery__like4').click((event) => { 
        $('.itemGallery__like4').toggleClass('active');
        
    })

    $('.itemGallery__like5').click((event) => { 
        $('.itemGallery__like5').toggleClass('active');
        
    })

    $('.itemGallery__like6').click((event) => { 
        $('.itemGallery__like6').toggleClass('active');
        
    })




    /* $('.itemGallery__buy').click((event) => { 
        $('.itemGallery__buy').toggleClass('active');
        
    }) */

    


});