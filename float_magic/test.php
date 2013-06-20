<script src="jquery.js"></script>  

<div style="float: left; display: inline; width: 300px; border: 1px solid;" id="lCol">
	<div class="thumb" style="width: 300px; height: 200px; float: left; display: inline; margin-bottom: 20px; background: #CCC;">
		1
	</div>
	<div class="thumb" style="width: 300px; height: 400px; float: left; display: inline; margin-bottom: 20px; background: #CCC;">
		2
	</div>
	<div class="thumb" style="width: 300px; height: 400px; float: left; display: inline; margin-bottom: 20px; background: #CCC;">
		3
	</div>
	<div class="thumb" style="width: 300px; height: 200px; float: left; display: inline; margin-bottom: 20px; background: #CCC;">
		4
	</div>
	<div class="thumb" style="width: 300px; height: 200px; float: left; display: inline; margin-bottom: 20px; background: #CCC;">
		5
	</div>
	<div class="thumb" style="width: 300px; height: 400px; float: left; display: inline; margin-bottom: 20px; background: #CCC;">
		6
	</div>
</div>

<div style="float: left; display: inline; width: 300px; margin-left: 20px; border: 1px solid;" id="rCol">
	&nbsp;
</div>

<script>
	
	var sHeight = 0;	//half of total height
	var lColH 	= 0;	//running tally of left col height
	var rColH 	= 0;	//running tally of right col height
	
	$(document).ready( function() {
		
		//set rcol to blank
		$('#rCol').html('');
		
		sHeight = Math.round($('#lCol').height()/2);
		
		//only moving images that we need to move
		
		$('.thumb').each(function(i){
			var tH = $(this).height();
			
			if(lColH > rColH && rColH < sHeight){
				$('#rCol').append(this);
				rColH += tH;
			}else lColH += tH;
			//if(i%2 == 1) 
		});
		
	});
</script>
