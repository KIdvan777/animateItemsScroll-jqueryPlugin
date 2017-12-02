$(document).ready(function(){

	var windowHeight = $(window).height();
	var windowScrollTop =  $(window).scrollTop();
	var windowScrollPosBottom = windowHeight + windowScrollTop;
	
	$.fn.revealOnScroll = function(direction, speed){

			return this.each(function(){

					var objectOffset = $(this).offset();
					var objectOffsetTop = objectOffset.top;

					if(!$(this).hasClass("hidden")){

						if(direction == "right"){

							$(this).css({
								"opacity" : 0,
								"right"   : "700px",
								"position"	: "relative"
							});

						}else{
								$(this).css({
								"opacity" : 0,
								"right"   : "-700px",
								"position"	: "relative"
							});
							
						}

						$(this).addClass("hidden");
					}

		
					if(!$(this).hasClass("animation-complete")){
						if(windowScrollPosBottom > objectOffsetTop) {
								$(this).animate({ "opacity": 1, "right": 0},
									1000).addClass("animation-complete");
							}
					}
			});
	};

		$(window).scroll(function(){

			windowHeight = $(window).height();
			windowScrollTop =  $(window).scrollTop();
			windowScrollPosBottom = windowHeight + windowScrollTop;

				$(".sidebar").revealOnScroll("right");
				$(".example-photo").revealOnScroll("left");
				$("ul li").revealOnScroll("right");
				
		});

});