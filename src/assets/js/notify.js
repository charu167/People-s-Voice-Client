(function($) {
    "use strict";
	
	$('#right').on("click", function(e){
		Notify('Default notification');
	});

	$('#random').on("click", function(e){
		Notify({
			content: 'Random color...',
			color: 'random'
		});
	});

	$('#left').on("click", function(e){
		Notify({
			content: 'Left notification',
			position: 'left',
			color: 'red'
		});
	});

	$('#rounded').on("click", function(e){
		Notify({
			content: 'Rounded notification',
			rounded: true,
			color: 'blue'
		});
	});

	$('#callback').on("click", function(e){
		Notify({
			content: 'Callback',
			color: 'random',
			callback: function () {
				alert('This is a callback');
			}
		});
	});

})(jQuery);