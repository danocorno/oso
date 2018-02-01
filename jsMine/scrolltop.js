function moveScroller() {
    var winW = (window.innerWidth) ? window.innerWidth : document.documentElement.offsetWidth;
    		
    		if (winW > 640)
    			{
                		var sw = "80%";
    			}
    		else
    			{
    					var sw = "100%";
    			}			
    		}	
    
    var $anchor = $("#scroller-anchor");
    var $scroller = $('#scroller');

    var move = function() {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        if(st > ot) {
            $scroller.css({
                position: "fixed",
                top: "0px",
                width: sw
            });
        } else {
            $scroller.css({
                position: "relative",
                top: ""
            });
        }
    };
    $(window).scroll(move);
    move();
}
