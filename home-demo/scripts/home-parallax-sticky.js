/*
JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
Demo: Recreating the Nikebetterworld.com Parallax Demo
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	var $firstBG = $('#intro');
	var $secondBG = $('#second');
	var $thirdBG = $('#third');
	var $fourthBG = $('#fourth');
	
	var windowHeight = $window.height(); //get the height of the window
	var windowWidth = $window.width(); //width of the window

	//calculates the height of the intro div to be used for the sticky nav
	var aboveHeight = ($('#intro').height())-100;



	//apply the class "inview" to a section that is in the viewport
	$('#intro, #second, #third, #fourth').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar

		//if the first section is in view...
		if($firstBG.hasClass("inview")){
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1100, 0.3)}); 
		}
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1900, 0.3)});
		}
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2750, 0.3)});
		}
		
		//if the fourth section is in view...
		if($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$fourthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3850, 0.3)});
		}
		
		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}

	//function to control the right aligned nav bar
	function rightLogin(){
		if (windowWidth<=1440){
			$('#login').addClass("fixed-right");
		} else {
			$('#login').removeClass("fixed-right");
		}
	}

	function stickyNav(){
		//if scrolled down more than the header’s height
                if ($(window).scrollTop() > aboveHeight){
 
	        // if yes, add “fixed” class to the <nav>
                $('#nav').addClass('fixed');
 
                } else {
 
	        // when scroll up or less than aboveHeight,remove the “fixed” class
                $('#nav').removeClass('fixed');
                }
		}
	
	rightLogin();	
	
	$window.resize(function(){ //if the user resizes the window...
		windowWidth = $window.width(); //find width of window again
		Move(); //move the background images in relation to the movement of the scrollbar
		rightLogin();
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move();//move the background images in relation to the movement of the scrollbar
		stickyNav();
	});
	
});