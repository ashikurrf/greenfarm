
//login page passaward show and hide//
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});
$(document).ready(function() {
    $("#confirm_show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#confirm_show_hide_password input').attr("type") == "text"){
            $('#confirm_show_hide_password input').attr('type', 'password');
            $('#confirm_show_hide_password i').addClass( "fa-eye-slash" );
            $('#confirm_show_hide_password i').removeClass( "fa-eye" );
        }else if($('#confirm_show_hide_password input').attr("type") == "password"){
            $('#confirm_show_hide_password input').attr('type', 'text');
            $('#confirm_show_hide_password i').removeClass( "fa-eye-slash" );
            $('#confirm_show_hide_password i').addClass( "fa-eye" );
        }
    });
});
//END//
// product cart counter//
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

//END//
//scrol nav fixed js//
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("head-btm");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};
// END//

//HOME PAGE SLIDER image//
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true
        }
    }
});
//END//
//single product page image change//
function changeImage(a) {
    document.getElementById("img").src=a;
}
// END//