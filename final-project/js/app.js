$('#media-1').hide();
$('#media-2').hide();
$('#media-3').hide();
$('#click-again').hide();


var myMedia = ['nic', 'pizza', 'portugal'];



$('#click-me').click(firstClick);
$('#click-again').click(nextClick);

function firstClick() {
	$('#media-1').show();
	$('.description').hide();
	$('#click-me').hide();
	$('#click-again').show();

}

function nextClick() {
	$('#media-1').hide();
	$('#media-2').show();
}




// Upon page load:
// display opening .description and #click-me button
// upon click replace .description and #click-me button with:
// #click-again and nicolas-cage.gif
// each subsequent click of #click-again will replace the content with new content

// create an array with different media inside and show content based on click? 
// simplify code
// use example from jquery city
