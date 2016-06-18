$(document).ready(function() {
	$('#clear').click(function() {
		var input = prompt('Resolution? (try 20-120 for best results!)', '80');
		var grid = Math.pow(input, 2);
		var res = (500/input);
		if (input != null) {
			$('#wrapper').empty();
			$('#wrapper').addClass('border');
			for (var i = 1; i <= grid; i++) {
				$('#wrapper').append('<div class="square"></div>');
			};
			$('.square').css('padding', res + 'px')
		};
		$('.square').mouseover(function() {
			$(this).css('opacity', '+=0.1');
		});
	});
});
