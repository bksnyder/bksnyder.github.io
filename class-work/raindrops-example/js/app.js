$('#box').raindrops(
{color:'#f77b7b',
density: 0.1,
waveHeight: 300,
rippleSpeed: 3,
frequency: 80});

$('#box').click(changeColor) 

function changeColor (){
	var water = 
		$('#box').raindrops(
		{color:'#f77b7b',
		density: 0.1,
		waveHeight: 300,
		rippleSpeed: 3,
		frequency: 80});

	$('#box').css('background', 'olive');

}