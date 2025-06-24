jQuery(document).ready(function($){
	$('head').append("<style>.print-only{display:none}@media print{.print-only{display:block}.MCPopupThumbnailLink{display:none}}</style>");

	$(".MCPopupThumbnailLink").each(function(){
		var src = $(this).attr("href");	
		$(this).after("<img class='print-only' src=" + src + " />");
	});
});