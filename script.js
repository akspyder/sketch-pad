$(document).ready(function() {
	var $newdiv;

	var defaultGrid = function() { for (var i = 0; i < 256; i++) {
		$newdiv = $('<div class="grid remove"></div>');
		$('#wrapper').append($newdiv);
		};
	}; //defaultGrid function

	var thirtyTwoGrid = function() { for (var i = 0; i < 1024; i++) {
		$newdiv = $('<div class="grid remove"></div>');
		$('#wrapper').append($newdiv);
		};
	}; //thirtyTwoGrid function

	var fortyEightGrid = function() { for (var i = 0; i < 2304; i++) {
		$newdiv = $('<div class="grid remove"></div>');
		$('#wrapper').append($newdiv);
		};
	}; //fortyEightGrid function

	var mouseEnter = function() {
		$('.grid').mouseenter(function() {
		$(this).addClass('mouseenter');
		});
	}; //mouseEnter function (to make background white)

	var mouseLeave = function() {
		$('.grid').mouseleave(function() {
		$(this).addClass('mouseleave');
		});
	}; //mouseLeave function 9to make background black)

	defaultGrid(); //run defaultGrid on startup
	mouseEnter(); //run mouseEnter
	mouseLeave(); //run mouseLeave
	

	$('button').click(function() {
		
		var count = prompt("How many on each side? Enter 16, 32, or 48.");

		if (count === '16') {
			location.reload(); //reload page if input is 16
		}
		else if (count === '32') {
			$('.remove').remove(); //this bit of code took me 2 hours to figure out/added remove class in $newdiv & remove on click						
			thirtyTwoGrid();
			$('.grid').addClass('thirtytwo');
			mouseEnter();
			mouseLeave();
		}
		else if (count === '48') {
			$('.remove').remove(); //this bit of code took me 2 hours to figure out/added remove class in $newdiv & remove on click						
			fortyEightGrid();
			$('.grid').addClass('fortyeight');
			mouseEnter();
			mouseLeave();
		}
		else {
			var count = prompt("Wrong input. Enter 16, 32, or 48.");
		};		
		
	});
	
});