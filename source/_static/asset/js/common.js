$(document).ready(function(){$(".contrast").on("click",function(){return $(".code-block").toggleClass("dark"),!1})}),$(document).ready(function(){$('a[rel="external"]').click(function(a){window.open(this.href),a.preventDefault()})}),$(document).ready(function(){$(".overlay, .modal-wrap").hide(),$(".disable").on("click",function(){return!1}),$(".modal-link").on("click",function(a){var b=$(document).height(),c=$(this).attr("rel");$(".overlay").fadeIn("slow").css("height",b),$("."+c).fadeIn("slow"),a.preventDefault(),$("#top").animate({scrollTop:0},100)}),$(".modal .close").on("click",function(a){$(".overlay").fadeOut("slow"),$(".modal-wrap").fadeOut("slow"),a.preventDefault()})}),$(document).ready(function(){}),$(document).ready(function(){$(".scroll").click(function(){return $("#top").animate({scrollTop:0},800),!1})}),$(document).ready(function(){$(".has-sub").on("click",function(){return $(".open").not(this).removeClass("open").siblings(".sub-nav, .arrow, .arrow-border").hide(),$(this).siblings(".sub-nav, .arrow, .arrow-border").toggle().end().toggleClass("open"),!1}),$(document).on("click",function(){$(e.target).closest(".sub-menu").length||$(".open").removeClass("open").siblings(".sub-nav, .arrow, .arrow-border").hide()})}),$(document).ready(function(){$(".tab-bar ul a").on("click",function(){var a=$(this).attr("rel");return $(".tab-bar ul a").not(this).removeClass("act"),$(".tab").not(".tab."+a+".tab-open").removeClass("tab-open"),$(this).addClass("act"),$(".tab."+a).addClass("tab-open"),!1})}),$(document).ready(function(){$("body").bind("touchstart",function(){})});
