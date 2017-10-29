// The following can be written in 4 lines of jQuery/JavaScript!

// 1. Add a .click() handler to elements with the class of .row
// 2. Write a function, slideRow - this function should be called in the above .click()
// 3. Inside of thje slideRow function, use the concept of $(this) to .find() the <div class="wrapper">
// 4. Once you find the .wrapper, use the .slideToggle() method to trigger the desired behavior

$('.row').click(slideRow);

function slideRow() {
	var open = $(this).find('.wrapper');
	// if( ...condition...) {
	// 	...code...
	// }else {
	// 	...code...
	// }
	$(open).slideToggle();

}




