var nic = $('#media-1');
var pizza = $('#media-2');
var concrete = $('#media-3');
nic.hide();
pizza.hide();
concrete.hide();
$('#click-again').hide();

var myMedia = [nic, pizza, concrete];
var counter = 0;



$('#click-me').click(firstClick);

console.log (counter)
function firstClick (){
	if (counter === 0) {
		$('.description').hide();
		$('#media').show();
		myMedia[counter].show();
		myMedia[myMedia.length - 1].hide();
	}
	else if (counter !== 0 && counter < 5) {
		myMedia[counter - 1].hide();
		myMedia[counter].show();	
	}
	else {
		// my media hide counter - 1
		// set counter to 0 
		// show my media at counter 0 
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
