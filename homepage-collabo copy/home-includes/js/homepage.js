jQuery(document).ready(function($) { //when the document is ready...

// ======================================================================= //
// General Variables
// ======================================================================= //
	var wH = $(window).height(); //get the height of the window

// ======================================================================= //
// Parallax
// ======================================================================= //

	$('.section').each(function(){
		var $section = $(this);

		$(window).scroll(function() {
			var sTop = $(window).scrollTop();
			var dY = $section.position().top;
			var dH = $section.height();
 
			var tID = $section.attr('id');

 
			var bP = $('#'+tID+" .parallax").css('backgroundPosition');

 
			//console.log("top view?" + tID+ " " +(dY - 430)+" "+430);
 
			//console.log("scroll top " + sTop);
 
			//console.log("calc"+ (dY - wH - sTop));
 
			if(dY - wH -sTop < 0){
 
				var relPos = -(dY - wH -sTop);
 
				//console.log(relPos);
				//var calced =
 
				//$('#'+tID+" div").css({backgroundPosition: '0%' + (dH- (2*relPos))/4});
 
				$('#'+tID+' .parallax').css({backgroundPosition: '50% ' + (((wH) - relPos)/4) + 'px'});
 
			}
		});
	});
	
// ======================================================================= //
// Header Fade In/Out
// ======================================================================= //

	$('.head-group').each(function(){
		var $head = $(this);
		var $section = $(this).closest('.section');
		$(window).scroll(function() {
			var sTop = $(window).scrollTop();
			var sectionTop = $section.position().top;
			var sectionHeight = $section.height();
			var sectionPos = sectionTop - wH - sTop;
			var fadeinRange = 200;
			var fadeoutRange = 100;
			var fadePoint = 140;
			//console.log("The offset is " + $(this).data('offset'))
			//console.log("The scrolltop is " + sTop)
			//console.log("The height is " + $(this).data('height'))
			//console.log("The opacity offset of " + hID + " is " + oS);
			//if the opacity scrolltop is between...show or hide
			if((sectionPos < -fadePoint) && (sectionPos > -wH)){
				$head.css({ 'opacity' : (0 + (-(sectionPos + fadePoint) / fadeinRange)) });
				// console.log("opacity = " + $head.css('opacity'));
			} else if (sectionPos < -wH){
				$head.css({ 'opacity' : (1 + ((sectionPos + wH) / fadeoutRange)) });
				// console.log("opacity = " + $head.css('opacity'));
			}
		});
	});

// ======================================================================= //
// Sign In
// ======================================================================= //

	var sHone = $('#sign-in').outerHeight();
	var sHtwo = $('#sign-hint').outerHeight();
	var signinToggle = false;

	$('#sign-hint img, #sign-hint p').click(function(){
		var plus = "&#43; SIGN IN";
		var minus = "&#8211; SIGN IN";
		if (signinToggle == false) {
			$('#sign-hint').animate({top: (sHone) + 'px'}, 250);
			$('#sign-in').animate({top: 0}, 250);
			$('#sign-hint p').empty().prepend(minus);
			signinToggle = true;
		} else if (signinToggle == true) {
			$('#sign-hint').animate({top: 0}, 250);
			$('#sign-in').animate({top: -(sHone) + 'px'}, 250);
			$('#sign-hint p').empty().prepend(plus);
			signinToggle = false;
		}
	});

// ======================================================================= //
// Input fields
// ======================================================================= //
	var focusTrigger = false;
	var autoTrigger = false;
	var bodyHeight = $('body').height();

	$('.welcome input[type=text]').focusin(function(){
		$('.welcome input[type=submit]').css({'background-color':'rgba(102,102,102,.75)'});
		$('.welcome input[type=text]').val('');
		focusTrigger = true;
	});
	if (focusTrigger = true) {
		$('.welcome input[type=text]').keypress(function(){
			$('.welcome input[type=submit]').css({'background-color':'rgba(102,102,102,1)'});
			if (autoTrigger == false){
				$('#intro').append("<div class='auto-complete-screen'>&nbsp;</div>");
				$('div.auto-complete-screen').animate({opacity: .5}, 300).css({height: (bodyHeight+'px')});
				autoTrigger = true;
			} 
		});
	};
	$('.welcome input[type=text]').focusout(function(){
		$('.welcome input[type=submit]').css({'background-color':'rgba(102,102,102,.5)'});
		// $('.welcome input[type=text]').val('Search Hotels, Destinations or Articles');
		focusTrigger = false;
		autoTrigger = false;
		$('.auto-complete-screen').remove();
	});
	$('input[type=text]#username').focusin(function(){
		$('input[type=text]#username').val('');
	});
	// $('input[type=text]#username').focusout(function(){
	// 	$('input[type=text]#username').val('Username');
	// });
	$('input[type=text]#password').focusin(function(){
		$('input[type=text]#password').val('');
	});
	// $('input[type=text]#password').focusout(function(){
	// 	if ($('input[type=text]#password').val = ''){
	// 		$('input[type=text]#password').val('Password');
	// 	}
	// });
	$('#footer input[type=text]').focusin(function(){
		$('#footer input[type=text]').val('');
	});
	
// ======================================================================= //
// Featured News
// ======================================================================= //

	var nHone = $('#half-moon').outerHeight();
	var nHthree = $('#news').outerHeight();
	var iH = $('#intro').height();
	var wD = iH - wH;
	var sTop = $(window).scrollTop();
	
	var featuredToggle = false;

	function halfmoonOpacity(){
		var sTop = $(window).scrollTop();
		var nH = iH + nHthree ;
		var iO = nH - sTop;
		// console.log("hello");
		// console.log(jO);
		if (iO >= wH) {
			// console.log("hello");
			$('#half-moon').fadeIn('fast');
			$('#news').fadeIn('fast');
		// console.log("intro offset = "+iO);
		// console.log("five");
		} else if (iO < wH) {
			// console.log("haro");
			$('#half-moon').fadeOut('fast');
			$('#news').fadeOut('fast');
		// console.log("intro offset = "+iO);
		// console.log("six");
		};
	};

	halfmoonOpacity();

	$('#half-moon').click(function(){
		if (featuredToggle == false) {
			// console.log("haro");
			$('#half-moon').animate({bottom: (nHthree) + 'px'}, 250);
			$('#news').animate({bottom: 0}, 250);
			featuredToggle = true;
		} else if (featuredToggle == true) {
			// console.log("g'bye");
			$('#half-moon').animate({bottom: 0}, 250);
			$('#news').animate({bottom: -(nHthree) + 'px'}, 250);
			featuredToggle = false;
		}
	});

	// ============= slider =============== //

	// article that was clicked slides in from right, opacity animation at same time
	function bringInNews(newsID){
		$(newsID).animate({opacity: '1.0', left: '0'}, 700, function(){
			// console.log(newsID);
			$(newsID).addClass('news-active');
		});
	} // bring in new article

	function dotActive(dotID){
		$(dotID).addClass('dot-active');
	} // bring in new article

	// // initial load of article container, opacity fade in and text color swap
	// function fadeInSubContent(){
	// 	// console.log("hello");
	// 	$('.subscribe-content').animate({opacity: '1.0'}, 500);
	// } // fade in article content

	// determines if the entire content div is displayed. should only
	// be triggered once 
	var newsIsShown = false;

	// primary functionality. first click loads content container and article.
	// subsequent clicks load the article clicked.
	$('.news-link').click(function(){
		// console.log("hello");
		//load content container on first click.
		if (newsIsShown == false) {
			// console.log("hello");
			// fadeInSubContent();
			newsIsShown = true;
		} // if 
		
		// on user click, grab ID value and covert "link-1" to "#join-1"
		var newsVal = $(this).attr('id').split('-');
		var newsNum = newsVal[1];
		// console.log(subNum);
		var newsID = ('#news-' + newsNum); // create an #ID to effect based on 'link' clicked
		var dotID = ('#'+$(this).attr('id'));
		// console.log(subID);
		// don't do anything if user clicks the active article
		if ( $(newsID).hasClass('news-active') ) {
			return false;
			// console.log("hello");
		} else {
			// active article fades out
			$('.news-active').animate({opacity: '0', left: '-960'}, 700, function(){	
				// removes the active class and repositions to 800px 
				// console.log("hello1");
				$('.news-active').animate({left: '960'}, 0).removeClass('news-active');
			});
			$('.dot-active').removeClass('dot-active');
			// call function to slide in new article
			bringInNews(newsID);
			dotActive(dotID);
		} // if else
	}); // sub-link.click

	

// ======================================================================= //
// Side Menu Functionality
// ======================================================================= //
	
	var menuShown = false;
	var menuPosition = (($(window).width() - $('.outer-wrapper').width()) / 2);

	// $(window).resize(function(){
	// 	menuPlacement();
	// });
	function menuPlacement() {
		menuPosition = ($(window).width() - $('.outer-wrapper').width()) / 2;
		$('#homepage-sidemenu').css({top: 200, right: 0});
		$('.menu-markers').css({top: 200, right: 105+'px'});
	}
	// animates the sidebar out of the viewport
	function firstmenuOut() {
		$('#homepage-sidemenu ul li a').stop(true, true).delay(5100).fadeOut(300); 
		$('.menu-markers').stop(true, true).delay(5100).animate({right:'25'}, 500);
		$('#homepage-sidemenu').stop(true, true).delay(5100).animate({right: '-80px'}, 500);
		menuShown = false;
	}
	// animates the sidebar out of the viewport
	function menuOut() {
		$('#homepage-sidemenu ul li a').stop(true, true).delay(100).fadeOut(300); 
		$('.menu-markers').stop(true, true).delay(100).animate({right:'25'}, 500);
		$('#homepage-sidemenu').stop(true, true).delay(100).animate({right: '-80px'}, 500);
		menuShown = false;
	}
	// animates the sidebar menu into the viewport
	function menuIn() {
		$('.menu-markers').stop(true, true).animate({right:'105'}, 300);
		$('#homepage-sidemenu').stop(true, true).animate({right: 0}, 300);
		$('#homepage-sidemenu ul li a').stop(true, true).delay(100).fadeIn(100);
		menuShown = true;
	}	
	// calculate 30% of the screen width from right
	function menuTrigger () {
		var mouse_hotspot = ($(window).width() * 0.7);
		return mouse_hotspot;
	}
	//Get Sections top position
    function getTargetTop(el){
        var id = el.attr("href");
        return $(id).offset().top;
    }
    //Get Sections top position
    function getMarkerTop(el){
        var id = el.attr("id");
        return $(id).offset().top;
    }
    // default position is out of the viewport
	menuPlacement(firstmenuOut());

	// sidemenu appears on certain mouse x position
	$(document).mousemove(function(m){
		if ((m.pageX >= menuTrigger(m)) && (menuShown == false)) {
			menuIn();
			// console.log("called menuIn on mouseX");
		} else if ((m.pageX < menuTrigger(m)) && (menuShown == true)) { 
			menuOut(); 
			// console.log("called menuOut on mouseX");
		}
	});

	//Smooth scroll when user click link that starts with #
    $('a[href^="#"]').click(function(event) {
        var target = getTargetTop($(this));
        $('html, body').animate({scrollTop:target}, 1000);
        event.preventDefault();
    }); //click


    var links = $('.side-link');
    var marker = $('.marker');

    function checkSectionSelected(scrolledTo){
        var threshold = 100;
        var i;
        // console.log("sectio is "+sections.length);
        for (i = 0; i < links.length; i++) {
            var section = $(links[i]);
            var target = getTargetTop(section);
            // console.log("target is "+target+'px')
            if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
                links.removeClass("activepanel");
                section.addClass("activepanel");
                if (i<4){
                	$('.marker').css({top: (52 * i)+'px', height: 52+'px'});
                } else {
                $('.marker').css({top: (52 * i)+'px', height: 36+'px'});
                // console.log(section.height+'px');
            	}
            };
        };
    } // check section selected

    


    // ======================================================================= //
	// Exclusive Benefits Video Functionality
	// ======================================================================= //

	// similar screenback functionality as Hideaway Reports, but affecting more elements.
	function screenback2(){
	$('.screenback-benefits').css({ 'z-index' : '201'});
	$('.screenback-benefits').animate({opacity: '1.0'}, 600, function(){ 
		$('.video-close').animate({opacity: '1.0'}, 600).css({'z-index': '204'});
		});
		$('.exclusive-benefits-play').css({'z-index': '202'});
	$('#fourth.section').css({'z-index': 'auto'});	
	}

	// revert screenback and video player content when user clicks close text
	function closeVideo(){
		$('.screenback-benefits').animate({opacity: '0.0'}, 600, function(){
			$('.video-close').animate({opacity: '0.0'}, 0);
			$('div.video-load img').animate({opacity: '0.0'}, 0);
			$('.screenback-benefits').css({'z-index': '-10'});
			$('div.exclusive-benefits-video').animate({opacity: '0.0'}, 600, function(){
				$('div.exclusive-benefits-video').empty();
				$('.exclusive-benefits-play').animate({opacity: '1.0'}, 600).css({'z-index': '203'});
				$('.video-close').css({'z-index': '202'});
				$('#fourth.section').css({'z-index': '98'});	
			});

		});
		$('.move-to-join h2 a').animate({opacity: '0.0'}, 200);
	}

	// bring in a CTA that animates the user to the Join panel
	function moveToJoin(){
		$('.move-to-join h2 a').delay(6000).animate({
			opacity: '1.0'}, 600).click(function(){
				closeVideo();
			});
	}


	
	// dynamically size the video player based on content-area size
	var videoW = 960; //$('.content-area').width();
	var videoH = 540; //videoW / 1.777;
	var video_id = $('.exclusive-benefits-video').attr('id'); 
	// brightcove   2226375446001
	// vimeoID      v1: 61829701    v2: 61894183

	// variable to be added to html markup on user click
	// var excl_video = '<script language="JavaScript" type="text/javascript" src="http://admin.brightcove.com/js/BrightcoveExperiences.js"></script>' +
	//                     '<object id="myExperience' + brightcoveID + '" class="BrightcoveExperience">' +
	//                       '<param id="autoplay" name="autoStart" value="true" />  ' +
	//                       '<param name="bgcolor" value="#FFFFFF" />' +
	//                       '<param name="width" value="' + videoW + '" />' +
	//                       '<param name="height" value="' + videoH + '" />' +
	//                       '<param name="playerID" value="2132346261001" />' +
	//                       '<param name="playerKey" value="AQ~~,AAAADJS2t1E~,j7dNipyDKIHi74_eP5U_Gdce5fKJJv_r" />' +
	//                       '<param name="isVid" value="true" />' +
	//                       '<param name="isUI" value="true" />' +
	//                       '<param name="dynamicStreaming" value="true" />' +
	//                      ' <param name="@videoPlayer" value="' + brightcoveID + '" />' +
	//                     '</object>' +
	//                     '<script type="text/javascript">brightcove.createExperiences();</script>';

	var vimeoID = 61829701;                    
	var vim_vid = '<iframe src="http://player.vimeo.com/video/' + video_id + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="' + videoW + '" height="' + videoH + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';	                    

	    // user clicks the semi-transparent play button, which fades out, then bring in the video player with autoplay selected
	//$('img.exclusive-benefits-video').click(function(){
	$('.exclusive-benefits-play').click(function(){
		$(this).animate({opacity: '0.0'}, 600, function(){
			//$('div.exclusive-benefits-video').empty().html(excl_video);
			$('div.exclusive-benefits-video').empty().html(vim_vid);
			$('div.exclusive-benefits-video').animate({
				opacity: '1.0'}, 1200);
				screenback2();
				moveToJoin();
			$('div.video-load img').animate({opacity: '1.0'}, 10);	
		}); // end callback
	}); // end videoclick function

	$('.video-close').click(function(){
		closeVideo();
	});
	$('.screenback-benefits').click(function(){
		closeVideo();
	});

	// ======================================================================= //
	// Hideaway Reports
	// ======================================================================= //

	function hrResize(){
		// dynamically size each hideaway report element in preparation for media queries
		var content_width = $('#HR-content').width();
		$('.hr-reports-wrapper').css({width: content_width});
		$('.hr-reports-content').css({width: content_width});
		var hrdisplay_w = $('.hr-reports-content').width() * 0.70;
		$('.hr-reports-display').css({width: hrdisplay_w});
		var outer_pos = $('.hr-reports-display').width() +80;

		if ( $('.hr-article').hasClass('hr-active') ) {
			return false;
		} else {
			$('.hr-article').css({left: outer_pos});
		}
	}
	hrResize();

	// will revert to initial css if user clicks on the screenback div.
	function hrRevert(){
		$('.screen-white').animate({opacity: '0.0'}, 600);
		$('.hr-reports-content').animate({opacity: '0.0'}, 10);
		$('.hr-reports-display').css({color: '#000'});
		$('.hr-reports-listing').removeClass('article-fade');
		$('.hr-article').removeClass('hr-active');
		$('#second #HR').css({color: '#fff', opacity: '1.0'});
		$('#second .head-group').css({color: '#fff'});
		$('.hrarticle.title-active').css({'border-right': 0});
		$('.hrarticle').removeClass('title-active');
	}

	// create a local lightbox effect on the hideaway reports section. 
	function screenback(){
		$('.screen-white').animate({opacity: '1.0'}, 600);
	}
	// article that was clicked slides in from right, opacity animation at same time
	function bringInNewArticle(hrID){
		$(hrID).animate({opacity: '1.0', left: '0'}, 700, function(){
			$(hrID).addClass('hr-active');
			articleIsAnim = false;
		});
	} // bring in new article

		//var scrollPastHR == false;
	// function scrollHRRevert(){
	// 	if ( $(window).scrollTop() > 2000 ) {
	// 		hrIsShown = false;
	// 		hrRevert();
	// 	}
	// }


	// initial load of article container, opacity fade in and text color swap
	function fadeInArticleContent(){
		screenback();
		$('.hr-reports-content').animate({opacity: '1.0'}, 500);
		$('.hr-reports-listing').addClass('article-fade');
		$('.hr-reports-display').css({color: '#000'});
		$('.hr-active').animate({left: '0', opacity: '1.0'}, 700);
		$('#second #HR').css({color: '#000', opacity: '1.0'});
	} // fade in article content

	// determines if the entire content div is displayed. should only
	// be triggered once 
	var hrIsShown = false;
	var articleIsAnim = false;
	// primary functionality. first click loads content container and article.
	// subsequent clicks load the article clicked.
	$('.hrarticle').click(function(){
		hrResize();
		if (articleIsAnim == true) {
			return false;
		} else {
			$('.hrarticle.title-active').css({'border-right': 0});
			$('.hrarticle').removeClass('title-active');
			$(this).addClass('title-active');
			$('.hrarticle.title-active').animate({'border-right': '10px solid #666'}, 400);
		}
		//load content container on first click.
		if (hrIsShown == false) {
			fadeInArticleContent();
			hrIsShown = true;
		} // if 

		// on user click, grab ID value and convert "link-1" to "#article-1"
		var hrVal = $(this).attr('id').split('-');
		var hrNum = hrVal[1];
		var hrID = ('#article-' + hrNum); // create an #ID to effect based on 'link' clicked
		
		// don't do anything if user clicks the active article
		if ( $(hrID).hasClass('hr-active') ) {
			return false;
		} else if (articleIsAnim == false) {
			// active article fades out
			$('.hr-active').animate({opacity: '0'}, 300, function(){	
				articleIsAnim = true;
				var outer_pos = $('.hr-reports-display').width() + 80;
				// removes the active class and repositions to 800px 
				$('.hr-active').animate({left: outer_pos}, 0).removeClass('hr-active');
				
			});
			// call function to slide in new article
			bringInNewArticle(hrID);
		} else {
			return false;
			}// if else
	}); // hrarticle.click

	// revert the HR section to initial styling if user clicks outside of the 
	// hr display area
	$('.screen-white').click(function(){
		if (hrIsShown) {
			hrRevert();
			hrIsShown = false;
		} else return false; 
	});

	// ======================================================================= //
	// Travel Planning
	// ======================================================================= //

	// set the initial position of the headline text
	$('.travel-planning ul li').each(function(){
		//find height of the li user hovers over
		var tp_img_height = $(this).height(); 
		//find height of headline + padding (arbitrary - find a good equation for this)
		var tp_headline_h = $(this).find('p.slip-headline').height() + 8; 
		//do math, son
		var tp_inactive_pos = tp_img_height - tp_headline_h;
		//set each hoverslip's top position based on the math above.
		$(this).find('.hoverslip').css({top: tp_inactive_pos});
	});
	
	
	// when user hovers over one of the three images, the headline div slides up to reveal
	// a brief, additional call to action
	$('.travel-planning ul li').mouseenter(function(){
		var tp_img_height = $(this).height(); 
		var tp_headline_h = $(this).find('p.slip-headline').height() + 8; 
		var tp_sub_h = $(this).find('p.slip-content').height(); //find height of sub content
		var tp_active_pos = tp_img_height - tp_sub_h - tp_headline_h;
		$(this).children('.hoverslip').stop(true, true).animate({top: tp_active_pos}, 300);
	}).mouseleave(function(){
		var tp_img_height = $(this).height(); //find height of the li user hovers over
		var tp_headline_h = $(this).find('p.slip-headline').height() + 8; //find height of headline
		var tp_sub_h = $(this).find('p.slip-content').height(); //find height of sub content
		var tp_inactive_pos = tp_img_height - tp_headline_h;
		$(this).children('.hoverslip').animate({top: tp_inactive_pos}, 400);
	});
	// ======================================================================= //
	// Subscribe
	// ======================================================================= //

	// article that was clicked slides in from right, opacity animation at same time
	function bringInNewSub(subID){
		$(subID).animate({opacity: '1.0', left: '0'}, 700, function(){
			// console.log(subID);
			$(subID).addClass('sub-active');
		});
	} // bring in new article

	// // initial load of article container, opacity fade in and text color swap
	// function fadeInSubContent(){
	// 	// console.log("hello");
	// 	$('.subscribe-content').animate({opacity: '1.0'}, 500);
	// } // fade in article content

	// determines if the entire content div is displayed. should only
	// be triggered once 
	var subIsShown = false;

	// primary functionality. first click loads content container and article.
	// subsequent clicks load the article clicked.
	$('.sub-link').click(function(){
		// console.log("hello");
		//load content container on first click.
		if (subIsShown == false) {
			// console.log("hello");
			// fadeInSubContent();
			subIsShown = true;
		} // if 
		
		// on user click, grab ID value and covert "link-1" to "#join-1"
		var subVal = $(this).attr('id').split('-');
		var subNum = subVal[1];
		// console.log(subNum);
		var subID = ('#join-' + subNum); // create an #ID to effect based on 'link' clicked
		// console.log(subID);
		// don't do anything if user clicks the active article
		if ( $(subID).hasClass('sub-active') ) {
			return false;
			// console.log("hello");
		} else {
			// active article fades out
			$('.sub-active').animate({opacity: '0', left: '-960'}, 700, function(){	
				// removes the active class and repositions to 800px 
				$('.sub-active').animate({left: '960'}, 0).removeClass('sub-active');
			});
			// call function to slide in new article
			bringInNewSub(subID);
		} // if else
	}); // sub-link.click

	// ======================================================================= //
	// Scroll/Resize/Onload events
	// ======================================================================= //

	$(window).resize(function(){
		var wH = $(window).height();
		halfmoonOpacity();
	});

	$(window).scroll(function (){
		halfmoonOpacity();
		// scrollHRRevert();
        checkSectionSelected($(window).scrollTop());
	});

	checkSectionSelected($(window).scrollTop());
		
}); // doc ready