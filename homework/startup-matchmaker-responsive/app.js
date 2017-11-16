// $(document).ready(function () {
// 	// console.logs the window.width
// 	$(window).resize(function () {
// 		console.log($(window).width())
// 	if ($(window).width() === 950) {
//       $('#mobile-nav').hide();
//     }	
// 	})
// })

$('#burger').click(showMenu)
	
	function showMenu (){
		$('#mobile-nav').slideToggle(200);
	}