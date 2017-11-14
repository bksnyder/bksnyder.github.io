$('#media-1').hide();
$('#media-2').hide();
$('#media-3').hide();
$('#click-again').hide();

var nic = $('#media-1');
var pizza = $('#media-2');
var myMedia = [nic, pizza];
var counter = 0;



$('#click-me').click(firstClick);

console.log (counter)
function firstClick (){
	if (counter === 0) {
		myMedia[counter].show();
		myMedia[myMedia.length - 1].hide();
	}
	else {
		myMedia[counter].hide();
		myMedia[counter + 1].show();	
	}

	counter = counter + 1;
	console.log (counter)
	if (counter === myMedia.length) {
		counter = 0;
	}
}

// $('#click-again').click(nextClick);

// function firstClick() {
// 	$('#media-1').show();
// 	$('.description').hide();
// 	$('#click-me').hide();
// 	$('#click-again').show();
// }

// function nextClick() {
// 	$('#media-1').hide();
// 	$('#media-2').show();
// }


//set up a counter

// Upon page load:
// display opening .description and #click-me button
// upon click replace .description and #click-me button with:
// #click-again and nicolas-cage.gif
// each subsequent click of #click-again will replace the content with new content

// create an array with different media inside and show content based on click? 
// simplify code
// use example from jquery city
