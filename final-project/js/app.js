$('#nicolas-cage').hide();
$('#click-again').hide();
$('#gaga').hide();


$('#click-me').click(firstClick);
$('#click-again').click(nextClick);

function firstClick() {
	$('#nicolas-cage').fadeIn();
	$('.description').fadeOut();
	$('#click-me').hide();
	$('#click-again').show();
}

function nextClick() {
	$('#nicolas-cage').fadeOut();
	$('#gaga').fadeIn();
}

// Upon page load:
// display opening .description and #click-me button
// upon click replace .description and #click-me button with:
// #click-again and nicolas-cage.gif
// each subsequent click of #click-again will replace the content with new content

// create an array with different media inside and show content based on click? 
// simplify code
// use example from jquery city