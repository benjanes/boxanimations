$('document').ready(function() {
	
	var $box = $('.box');
	
	// initial placements of visible boxes, alternatively goes in CSS
	$box.eq(4).css({top: '70px',left: '30px',width: '10px',height: '10px'});
	$box.eq(3).css({top: '45px',left: '55px',width: '60px',height: '60px'});
	$box.eq(2).css({top: '25px',left: '175px',width: '100px',height: '100px'});
	$box.eq(1).css({top: '45px',left: '335px',width: '60px',height: '60px'});
	$box.eq(0).css({ top: '70px',left: '410px',width: '10px',height: '10px'});
	
	var numberOfItems = $('.box').length;
	var right = numberOfItems-1;
	var a = 0;
	var b = 1;
	var c = 2;
	var d = 3;
	var e = 4;
	var f = 5;
	var left = 6;
	var animateInterval = 500; // speed of the animation steps
	var itemInterval = 1000; // delay interval on the loop
	
	// defines steps in counterclockwise motion	
	var counterclockwise = function() {
		$box.eq(a).stop().animate({
			left: '425px',
			top: '75px',
			width: '0px',
			height: '0px'
		}, animateInterval);
		$box.eq(b).stop().animate({
			top: '70px',
			left: '410px',
			width: '10px',
			height: '10px'
		}, animateInterval);
		$box.eq(c).stop().animate({
			top: '45px',
			left: '335px',
			width: '60px',
			height: '60px'
		}, animateInterval);
		$box.eq(d).stop().animate({
			top: '25px',
			left: '175px',
			width: '100px',
			height: '100px'
		}, animateInterval);
		$box.eq(e).stop().animate({
			top: '45px',
			left: '55px',
			width: '60px',
			height: '60px'
		}, animateInterval);
		$box.eq(f).stop().animate({
			top: '70px',
			left: '30px',
			width: '10px',
			height: '10px'
		}, animateInterval);
		$box.eq(left).stop().animate({
			top: '75px',
			left: '25px',
			width: '0px',
			height: '0px'
		}, animateInterval);
        if(a == numberOfItems -1){
            a = 0;	
        }else{
            a++;					
        }
        if(b == numberOfItems -1){
            b = 0;	
        }else{
            b++;					
        }
        if(c == numberOfItems -1){
            c = 0;	
        }else{
            c++;					
        }
        if(d == numberOfItems -1){
            d = 0;	
        }else{
            d++;					
        }
        if(e == numberOfItems -1){
            e = 0;	
        }else{
            e++;					
        }
        if(f == numberOfItems -1){
            f = 0;	
        }else{
            f++;					
        }
        if(left == numberOfItems -1){
            left = 0;	
        }else{
            left++;					
        }
        if(right == numberOfItems -1){
            right = 0;	
        }else{
            right++;					
        }
	}; // END of counterclockwise() definition
	
	// defines steps in clockwise motion
	var clockwise = function() {
		$box.eq(right).stop().animate({
			top: '75px',
			left: '425px',
			width: '0px',
			height: '0px'
		}, 0)
		.stop().animate({
			top: '70px',
			left: '410px',
			width: '10px',
			height: '10px'
		}, animateInterval);
		$box.eq(a).stop().animate({
			top: '45px',
			left: '335px',
			width: '60px',
			height: '60px'
		}, animateInterval);
		$box.eq(b).stop().animate({
			top: '25px',
			left: '175px',
			width: '100px',
			height: '100px'
		}, animateInterval);
		$box.eq(c).stop().animate({
			top: '45px',
			left: '55px',
			width: '60px',
			height: '60px'
		}, animateInterval);
		$box.eq(d).stop().animate({
			top: '70px',
			left: '30px',
			width: '10px',
			height: '10px'
		}, animateInterval);
		$box.eq(e).stop().animate({
			left: '25px',
			top: '75px',
			width: '0px',
			height: '0px'
		}, animateInterval);
		$box.eq(f).stop().animate({
			top: '75px',
			left: '425px',
			width: '0px',
			height: '0px'
		}, animateInterval);
        if(a == 0){
            a = numberOfItems -1;	
        }else{
            a--;					
        }
        if(b == 0){
            b = numberOfItems -1;	
        }else{
            b--;					
        }
        if(c == 0){
            c = numberOfItems -1;	
        }else{
            c--;					
        }
        if(d == 0){
            d = numberOfItems -1;	
        }else{
            d--;					
        }
        if(e == 0){
            e = numberOfItems -1;	
        }else{
            e--;					
        }
        if(f == 0){
            f = numberOfItems -1;	
        }else{
            f--;					
        }
        if(right == 0){
            right = numberOfItems -1;	
        }else{
            right--;					
        }
        if(left == 0){
            left = numberOfItems -1;	
        }else{
            left--;					
        }
	}; // END of clockwise() definition
	
	// on hover on left side of container, start loop moving counterclockwise
	$('#left').hover(function() {
		counterclockwise(); // bypass itemInterval delay on initial mouseover
		loop_on_left = setInterval(counterclockwise, itemInterval);
	}, function() {
		clearInterval(loop_on_left);
	});
	
	// on hover on right side of container, start loop moving clockwise			
	$('#right').hover(function() {
		clockwise(); // bypass itemInterval delay on initial mouseover
		loop_on_right = setInterval(clockwise, itemInterval);
	}, function() {
		clearInterval(loop_on_right);
	});			
 
}); // end ready