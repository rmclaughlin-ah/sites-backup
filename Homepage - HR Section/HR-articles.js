jQuery(document).ready(function($){	

	// ======================================================================= //
	// Hideaway Reports
	// ======================================================================= //

	// reset the position and opacity of the loader class after it animates
	function resetLoader(hrID){
		$('.hr-article').removeClass('hr-loader');
		$('.hr-loader').css({ left: '800', opacity: '0' });


	}
	
	// animate the position and opacity of the loader article, calls loader reset function once done
	function animLoader(hrID){
		$('.hr-loader').animate({ left: '0', opacity: '1.0' }, 600, function(){
			$('.hr-loader').addClass('hr-active');
			resetLoader(hrID);
		});
		
		if ( $(hrID).hasClass('hr-active') ) {
			return false;
		} else {
			//$('.hr-article').addClass('hr-standby');
			console.log("non-active articles moved to left 800");
			$('.hr-article').css({left: '800'});
		}
	}

	// animate the opacity of the active article to zero on user click, calls loader animate function once done
	function hrFadeOut(hrID){
		$('.hr-loader').css({ left: '800', opacity: '0' });
		$(hrID).removeClass('hr-standby').addClass('hr-loader');
		$('.hr-active').animate({opacity: '0'}, 400, function(){
			$('.hr-article').removeClass('hr-active'); // remove active class from all articles during animation
		});
		animLoader(hrID);
	}

	$('.hrarticle').click(function(){
		var hrVal = $(this).attr('id').split('-');
		var hrNum = hrVal[1];
		var hrID = ('#article-' + hrNum); // create an #ID to effect based on 'link' clicked
		hrFadeOut(hrID);
	}); // hrarticle.click

	resetLoader();




/* ====================================== End JS ========= */
}); //doc.ready