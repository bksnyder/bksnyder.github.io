// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#first').click(updateFirst);
// $('#second').click(updateSecond);
// $('#third').click(updateThird);
// $('#fourth').click(updateFourth);

// function updateFirst (){
// 	$('#bigimage').attr('src', 'img/1.jpg');
// }

// function updateSecond (){
// 	$('#bigimage').attr('src', 'img/2.jpg');
// }

// function updateThird (){
// 	$('#bigimage').attr('src', 'img/3.jpg');
// }

// function updateFourth (){
// 	$('#bigimage').attr('src', 'img/4.jpg');
// }

$('.thumb').click(changeImage);

function changeImage() {
		console.log(this)
	// 1. get (store variable) this element's 'src'
		var thumb = $(this).attr('src');
	// 2. update #bigimage's 'src' using the above variable
		$('#bigimage').attr('src', thumb);
}


