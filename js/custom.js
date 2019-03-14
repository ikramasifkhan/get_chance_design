// In the name of Allah the Benificent the Merciful

// scroll top start here

$(document).ready(function(){ 
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('.scrollTop, #scrollTopBtn').fadeIn(500);
        }else{
            $('.scrollTop, #scrollTopBtn').fadeOut(500);
        }
    });
    
    $('.scrollTop, #scrollTopBtn').click(function(){
        $('body,html').animate({
            scrollTop:0
        }, 1000);
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplaySpeed: 3000,
        autoplay:true
    });
    
    $('.category_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay:true
    });
    
    $('.about_us_slider').slick({
         slidesToShow: 1,
        autoplaySpeed: 1000,
        autoplay:true
    });
    
    $('.demo_question_slider').slick({
        slidesToShow: 1,
        autoplaySpeed: 5000,
        autoplay:true
    });
    
    $('.similar_product_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay:true
    });
       
 });


var quantity=document.getElementById('quantity');
function change_style(){
    var quantity=document.getElementById('quantity');
    quantity.style.cssText='border-color:#fd4d4d; box-shadow:none';
}
var add_attribute=quantity.setAttribute("placeholder", "পরিমাণ");


