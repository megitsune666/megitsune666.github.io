$(document).ready(function() {

	$("#btn-rawtext, .menu-link").hover(function() {
		$(this).css("background-color", "#443F94");
	},function() {
		$(this).css("background-color", "#AF95D4");
	});

	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#443F94");
	}, function() {
		$(this).css("background-color", "#AF95D4");
	});

	$("#menu-restart").click(function() {
		location.reload();
	});

});
