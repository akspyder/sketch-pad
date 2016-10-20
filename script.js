$(document).ready(function() {
	var $newdiv;

	var defaultGrid = function() { for (var i = 0; i < 255; i++) {
		$newdiv = $('<div class="grid"></div>');
		$('#wrapper').append($newdiv);
		};
	}; //defaultGrid function

	var thirtyTwoGrid = function() { for (var i = 0; i < 1023; i++) {
		$newdiv = $('<div class="grid"></div>');
		$('#wrapper').append($newdiv);
		};
	}; //thirtyTwoGrid function

	var sixtyFourGrid = function() { for (var i = 0; i < 4095; i++) {
		$newdiv = $('<div class="grid"></div>');
		$('#wrapper').append($newdiv);
		};
	}; //sixtyFourGrid function

	var mouseEnter = function() {
		$('.grid').mouseenter(function() {
		$(this).addClass('mouseenter');
		});
	}; //mouseEnter function (to make background white)

	var mouseLeave = function() {
		$('.grid').mouseleave(function() {
		$(this).addClass('mouseleave');
	});
	};

	defaultGrid(); //run defaultGrid on startup
	mouseEnter(); //run mouseEnter
	//mouseLeave(); //run mouseLeave
	

	$('button').click(function() {

		//location.reload(); //reload the page on click

		var count = prompt("How many squares do you want on each side? Enter 16, 32, or 64.");

		switch(count) {
			case '16':
				location.reload();

			case '32':
															
				thirtyTwoGrid();
				$('.grid').addClass('thirtytwo');
				//mouseEnter();
				//mouseLeave();
		};

		
	});



	
});