/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

/*---------------------------------------------------- */
/* navbar background color toggle
------------------------------------------------------ */ 

   window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 690 || document.documentElement.scrollTop > 690) {
        document.getElementById("navbar").style.backgroundColor = "black";
        document.getElementById("navbar").style.height = "30px";
    } else {
        document.getElementById("navbar").style.backgroundColor = "";
        document.getElementById("navbar").style.height = "60px";
    }
}

/*---------------------------------------------------- */
/* menu toggle
------------------------------------------------------ */ 

if($(window).width() <= 1024) {
document.getElementById("menuClick").onclick = function(event){
	if($('#main-nav-wrap').css('display')=='inline-block'){
		$('#main-nav-wrap').css('display', 'none');
	} else {
		$('#main-nav-wrap').css('display', 'inline-block');
		$('#menuClick').css('display', 'none');
	}
}

	$('#main-nav-wrap ul li a').click(function(event){
		$('#main-nav-wrap').css('display', 'none');
		$('#menuClick').css('display', 'inline-block');
});
}

/*---------------------------------------------------- */
/* Scroll to top
------------------------------------------------------ */
$(window).load(function () {
	$('html, body').animate({scrollTop: 0}, 600);
})

})(jQuery);