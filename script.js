$(document).ready(function() {
	var $newdiv;
	for (var i = 0; i < 255; i++) {
		$newdiv = $('<div class="grid"></div>');
		$('#wrapper').append($newdiv);
	};

	$('.grid').mouseenter(function() {
		$(this).addClass('mouseenter');
	});

	$('.grid').mouseleave(function() {
		$(this).addClass('mouseleave');
	});
	
});