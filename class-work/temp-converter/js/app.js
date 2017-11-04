$('#celsius').keyup(convertCelsius);
$('#fahrenheit').keyup(convertFahrenheit);

function convertCelsius(){
	var celsius = $('#celsius').val();
	var fahrenheit = celsius * 1.8 +32;
	$('#fahrenheit').val(fahrenheit);

	if ($('#celsius').val()===""){
		$('#fahrenheit').val("")
	}

	if (fahrenheit >= 85){
		$('body').css('background-color', 'red')
	} 
}

function convertFahrenheit(){
	var fahrenheit = $('#fahrenheit').val();
	var celsius = (fahrenheit - 32) / 1.8;
	$('#celsius').val(celsius)

	if ($('#fahrenheit').val()===""){
		$('#celsius').val("")
	} 

	if (celsius >= 40){
		$('body').css('background-color', 'red')
	}
}



