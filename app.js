let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#30A3E6";
tg.MainButton.text = "Корзина";

class Order {
	constructor() {
		this.name = [];
		this.sugar = '';
		this.links = [];
		this.prices = [];
		this.price = 0;
	}
};
let order = new Order();

jQuery(document).ready(function($) {
	var block_show = null;
	function scrollTracking(){
		// 1 //
		var a = $(window).scrollTop();
		var b = $(window).height();
		var c = $('.coffee').offset().top;
		var d = $('.coffee').outerHeight();

		if (a + b >= c && a + b - d * 2 <= c + (b - d)){
			if (block_show == null || block_show == false) {
				document.getElementById("navbarButtonFirst").style.backgroundColor = "#30A3E6";
				document.getElementById("navbarButtonSecond").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonThird").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonForth").style.backgroundColor = "#333333";
			}
			block_show = true;
		} else {
			if (block_show == null || block_show == true) {
				document.getElementById("navbarButtonFirst").style.backgroundColor = "#333333";
			}
			block_show = false;
		}
		// 2 //
		var e = $(window).scrollTop();
		var f = $(window).height();
		var g = $('.freshes').offset().top;
		var h = $('.freshes').outerHeight();

		if (e + f >= g && e + f - h * 2 <= g + (f - h)){
			if (block_show == null || block_show == false) {
				document.getElementById("navbarButtonSecond").style.backgroundColor = "#30A3E6";
				document.getElementById("navbarButtonFirst").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonThird").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonForth").style.backgroundColor = "#333333";
			}
			block_show = true;
		} else {
			if (block_show == null || block_show == true) {
				document.getElementById("navbarButtonSecond").style.backgroundColor = "#333333";
			}
			block_show = false;
		}
		// 3 //
		var i = $(window).scrollTop();
		var j = $(window).height();
		var k = $('.coldDrinks').offset().top;
		var l = $('.coldDrinks').outerHeight();

		if (i + j >= k && i + j - l * 2 <= k + (j - l)){
			if (block_show == null || block_show == false) {
				document.getElementById("navbarButtonThird").style.backgroundColor = "#30A3E6";
				document.getElementById("navbarButtonFirst").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonSecond").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonForth").style.backgroundColor = "#333333";
				var el = document.getElementById('navbarButtonThird');
				el.scrollIntoView({block: "center", inline: "center"});
			}
			block_show = true;
		} else {
			if (block_show == null || block_show == true) {
				document.getElementById("navbarButtonThird").style.backgroundColor = "#333333";
			}
			block_show = false;
		}
		var m = $(window).scrollTop();
		var n = $(window).height();
		var o = $('.grains').offset().top;
		var p = $('.grains').outerHeight();

		if (m + n >= o && m + n - p * 2 <= o + (n - p)){
			if (block_show == null || block_show == false) {
				document.getElementById("navbarButtonForth").style.backgroundColor = "#30A3E6";
				document.getElementById("navbarButtonFirst").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonSecond").style.backgroundColor = "#333333";
				document.getElementById("navbarButtonThird").style.backgroundColor = "#333333";
			}
			block_show = true;
		} else {
			if (block_show == null || block_show == true) {
				document.getElementById("navbarButtonForth").style.backgroundColor = "#333333";
			}
			block_show = false;
		}
	}
	 
	$(window).scroll(function(){
		scrollTracking();
	});
		
	$(document).ready(function(){ 
		scrollTracking();
	});
});

jQuery(document).ready(function($) {
	var element = document.querySelector('#coldDrinks');
	var element1 = document.querySelector('#coffee');

	var Visible = function (target) {
	  var targetPosition = {
	      top: window.pageYOffset + target.getBoundingClientRect().top,
	      left: window.pageXOffset + target.getBoundingClientRect().left,
	      right: window.pageXOffset + target.getBoundingClientRect().right,
	      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	    },
	    windowPosition = {
	      top: window.pageYOffset,
	      left: window.pageXOffset,
	      right: window.pageXOffset + document.documentElement.clientWidth,
	      bottom: window.pageYOffset + document.documentElement.clientHeight
	    };
	    let lastScroll = 0;
		const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

	  if (targetPosition.bottom > windowPosition.top &&
	    targetPosition.top < windowPosition.bottom &&
	    targetPosition.right > windowPosition.left &&
	    targetPosition.left < windowPosition.right &&
	    scrollPosition() > lastScroll &&
	    target == document.querySelector('#coldDrinks')) {
	    var el = document.getElementById('navbarButtonThird');
		el.scrollIntoViewIfNeeded();
	  } else if (targetPosition.bottom > windowPosition.top &&
	  	targetPosition.top < windowPosition.bottom &&
	  	targetPosition.right > windowPosition.left &&
	  	targetPosition.left < windowPosition.right &&
	  	scrollPosition() > lastScroll &&
	  	target == document.querySelector('#coffee')) {
	  	var el = document.getElementById('navbarButtonFirst');
		el.scrollIntoViewIfNeeded();
	  };
	};

	window.addEventListener('scroll', function() {
	  Visible (element);
	  Visible (element1);
	});

	Visible (element);
	Visible (element1);
});

jQuery(document).ready(function() {
	$(function() {
	  (function quantityProducts() {
	    let $quantityArrowMinus = $(".quantityArrowMinus");
	    let $quantityArrowPlus = $(".quantityArrowPlus");
	    let $quantityNum = $(".quantityNum");

	    function quantityMinus() {
	    	if ($(this).parent().children(".quantityNum").val() != 1) {
	    		$(this).parent().children(".quantityNum").val(+$(this).parent().children(".quantityNum").val() - 1);
	    	} else {
	    		$(this).parent().css('display', 'none');
	    		$(this).parent().parent().children(".btn").css('display', 'inline-block');
	    	}
	    }
	    function quantityPlus() {
	    	$(this).parent().children(".quantityNum").val(+$(this).parent().children(".quantityNum").val() + 1);
	    }
	    $quantityArrowMinus.click(quantityMinus);
	    $quantityArrowPlus.click(quantityPlus);
	  })();
	 
	});
	$(function() {
		(function hideButton() {
			let $btn = $(".btn")
			let $Plus = $(".quantityArrowPlus")
			let $Minus = $(".quantityArrowMinus")

			function hide() {
				$(this).css('display', 'none')
				$(this).parent().children(".quantityBlock").css('display', 'flex')
			};
			function changeButtonText() {
				if ($(this).data('id') == 'btn') {
					order.name.push($(this).parent().children(".description").text());
					order.links.push($(this).parent().children(".img").attr('src'));
					let prevPrice = Number($(this).parent().children(".btn").text().replace(/[^0-9]/g,""));
					let buttonPrice = Number(tg.MainButton.text.replace(/[^0-9]/g,""));
					let price = prevPrice + buttonPrice;
					order.price = price;
					tg.MainButton.setText('Корзина ' + price + 'р');
					tg.MainButton.show();
					console.log("MainButton showed")
				} else if($(this).data('id') != 'minus') {
					let prevPrice = tg.MainButton.text.replace(/[^0-9]/g,"");
					let price = Number(prevPrice) + Number($(this).parent().parent().children(".btn").text().replace(/[^0-9]/g,""));
					order.name.push($(this).parent().parent().children(".description").text());
					order.links.push($(this).parent().parent().children(".img").attr('src'));
					order.price = price;
					tg.MainButton.setText('Корзина ' + order.price + 'р');
				} else {
					let prevPrice = Number($(this).parent().parent().children('.btn').text().replace(/[^0-9]/g,""));
					let buttonPrice = Number(tg.MainButton.text.replace(/[^0-9]/g,""));
					order.price = buttonPrice - prevPrice;
					var index = order.name.indexOf($(this).parent().parent().children(".description").text());
					var index_links = order.links.indexOf($(this).parent().parent().children(".img").attr('src'));
					order.name.splice(index, 1)
					order.links.splice(index, 1)
					if (order.price != 0) {
						tg.MainButton.setText('Корзина ' + order.price + 'р');
						console.log("MainButton showed")
					} else {
						tg.MainButton.hide();
						console.log("MainButton hided")
						tg.MainButton.setText('Корзина');
					};
				}
			};
			$btn.click(hide);
			$btn.click(changeButtonText);
			$Plus.click(changeButtonText);
			$Minus.click(changeButtonText);
		})();
	});
});

jQuery(document).ready(function($) {
	Telegram.WebApp.onEvent("mainButtonClicked", function(){
		if (tg.MainButton.text.includes('Корзина')) {
			document.location.replace('https://akhmed-gadzhiev.github.io/akhmed-gadzhiev-akhmed-gadzhiev-akhmed-gadzhiev.github.io/order.html');
			$('document').ready(function(){
				let len = order.name.length();
				for (var l = order.name.length(); l<order.name.length(); l++) {
					$("#inner").append(`<div class="elem"><img src=${order.links[l]} class="image"><span class="item-description sticky-top">${order.name[l]}</span><span class="header">Комментарий:</span><textarea class="comment" placeholder="Например: кофе без сахара"></textarea></div>`);
				}
				tg.MainButton.setText('Заказать ' + order.price + 'р');
			});
			//let len = order.name.length();
			//$("html").html(`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="order.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><title>V12</title></head><body><div class="container"><div id="inner" class="inner"></div></div></body></html>`);
			// for (var l = order.name.length(); l<order.name.length(); l++) {
			//$("#inner").append(`<div class="elem"><img src=${order.links[0]} class="image"><span class="item-description sticky-top">${order.name[0]}</span><span class="header">Комментарий:</span><textarea class="comment" placeholder="Например: кофе без сахара"></textarea></div>`);
			// }
			//$('html').append('<div>hi</div>');
			//tg.MainButton.setText('Заказать' + order.price + 'р');
		} else {
			tg.sendData(order);
		}
	});
});
