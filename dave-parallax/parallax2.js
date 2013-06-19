/**
 * @author Dave Boehm
 */
$(document).ready(function(){
	
	var $window = $(window);
	
    $('div.background').each(function(){
        var $bgobj = $(this); // assigning the object
        var thisSpeed = $(this).attr('rel');
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / thisSpeed);
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // scroll
    }); // .each
    
    $('p.background').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / parallaxSpeed);
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // scroll
    }); // .each
    
}); // doc.ready

// ************************************************************************
/*
$(document).ready(function(){
	
	var $window = $(window);
	
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // scroll
    }); // .each
    
    $('article[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // scroll
    }); // .each
    
}); // doc.ready
*/