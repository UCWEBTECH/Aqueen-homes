$(document).ready(function(){$(document).scroll(function(){532<=$(window).scrollTop()?$(".project-header").addClass("fixed-header"):$(".project-header").removeClass("fixed-header")});var o={};$(".galleryItem").each(function(){var e=parseInt($(this).attr("data-group"),10);o[e]||(o[e]=[]),o[e].push(this)}),$.each(o,function(){$(this).magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,gallery:{enabled:!0},callbacks:{open:function(){var e=$.magnificPopup.instance,o=$.magnificPopup.proto;e.next=function(){e.index<e.items.length-1&&o.next.call(e)},e.prev=function(){0<e.index&&o.prev.call(e)}}}})}),$(".amenity-slider").slick({dots:!1,infinite:!1,speed:300,slidesToShow:5,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1}}]})}),$(".project-header").singlePageNav({offset:$(".project-header").outerHeight()});