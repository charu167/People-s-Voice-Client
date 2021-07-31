$(function(){
   'use strict'

	// Message
	$("#but1").on("click", function(e){
		var message = $("#message").val();
		if(message == ""){
			message  = "Your message";
		}
		swal(message);
	});

	// With message and title
	$("#but2").on("click", function(e){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "Your message";
		}
		if(title == ""){
			title = "Your message";
		}
		swal(title,message);
	});

	// Show image
	$("#but3").on("click", function(e){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "Your message";
		}
		if(title == ""){
			title = "Your message";
		}
		swal({
			title: title,
			text: message,
			imageUrl: '../assets/images/brand/favicon.png'
		});
	});

	// Timer
	$("#but4").on("click", function(e){
		var message = $("#message").val();
		var title = $("#title").val();
		if(message == ""){
			message  = "Your message";
		}
		if(title == ""){
			title = "Your message";
		}
		message += "(close after 2 seconds)";
		swal({
			title: title,
			text: message,
			timer: 2000,
			showConfirmButton: false
		});
	});
	
	//
	$("#click").on("click", function(e){
		var type = $("#type").val();
		swal({
			title: "Title",
			text: "Your message",
			type: type
		});
	});
	
	// Prompt
	$("#prompt").on("click", function(e){

		swal({
			title: "Add",
			text: "Enter your message",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: false,
			inputPlaceholder: "Your message"
		},function(inputValue){


			if (inputValue != "") {
				swal("Input","You have entered : " + inputValue);

			}
		});
	});

	// Confirm
	$("#confirm").on("click", function(e){
		swal({
			title: "Alert",
			text: "Are you really want to exit",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});

	
	$("#click").on("click", function(e){
		swal('Congratulations!', 'Your message has been succesfully sent', 'success');
	});
	$("#click1").on("click", function(e){
		swal({
			title: "Alert",
			text: "Waring alert",
			type: "warning",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	$("#click2").on("click", function(e){
		swal({
			title: "Alert",
			text: "Danger alert",
			type: "error",
			showCancelButton: true,
			confirmButtonText: 'Exit',
			cancelButtonText: 'Stay on the page'
		});
	});
	
});