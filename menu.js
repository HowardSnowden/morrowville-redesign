var width = $(window).width();
$(document).ready(function(){
     
    addMobile();
    toggleMenu();
    mobileSubMenuToggle();
   
    $(window).on('resize', function(e){
     e.stopPropagation();
    if (detectWidthResize()){ 
     addMobile();
     mobileReset();
     mobileSubMenuToggle();
    }
     if ($(window).width()> 1100){
         $('#menu ul').first().css('display', 'block');
     
     
     }
    
    });
 });



function addMobile(){
    var div = "<div id='mobile'>'<a class='mobile' href=#>Menu</a></div>"
     
     if ($(window).width() < 1100){
        $('#header').append(div);
       if (!$('.sub-menu').parent('li').children('a').first().hasClass('caret')){
       $('.sub-menu').parent('li').children('a').first().addClass('caret');
        }
     }
    else{
        $('.mobile').remove();
        $('.sub-menu').parent('li').children('a').first().removeClass('caret');
        
    }
    
    
}


function toggleMenu(){
    $('#header').on('click', '.mobile', function(e){
        e.preventDefault();
       $('#menu ul').first().slideToggle(500);
      
       $('.mobile').toggleClass('pushed');
    
    });
}

function mobileReset(){
    
   
    $('#menu ul').css('display', 'none');
    
    $('.mobile').removeClass('pushed');
    
    
}


function mobileSubMenuToggle(){
    
     var hideMenu = function(){
          
          $('#menu .sub-menu').css('display', 'none');
         
     };
    
    var showMenu = function(){
        
        $('#menu .sub-menu').css('display', 'block');
    };
         
    if ($(window).width() < 1100){
        $('#menu .sub-menu').parent('li').off('mouseover', showMenu);
        $('#menu .sub-menu').parent('li').off('mouseout', hideMenu);
        
        
        $('#menu .sub-menu').parent('li').children('a').first().off('click');
        $('#menu .sub-menu').parent('li').children('a').first().on('click', function(e){
             e.preventDefault();
    
            $(this).parent('li').find('.sub-menu').toggle(0);
            
        });
    }
    
    else {
        $('#menu .sub-menu').parent('li').children('a').first().unbind('click');
        
        $('#menu .sub-menu').parent('li').on('mouseover', showMenu);
        $('#menu .sub-menu').parent('li').on('mouseout', hideMenu);
        
       
}
    
}


function detectWidthResize(){
  
    
    if (width !== $(window).width()){
        
        width = $(window).width();
        return true;
        
    }
    return false;
}
