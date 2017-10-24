var total = 0;

//Hey JQuery. Target (this button) and when it is clicked, run (this function);

$('#a10').click(add10);
$('#a20').click(add20);
$('#a30').click(add30);
$('#red').click(red);
$('#out').click(reset);
$('#blue').click(blue);
$('#n10').click(minus10);
$('#n20').click(minus20);
$('#n30').click(minus30);

function add10 (){
	total = total + 10;
	$('#out').html(total);
}

function add20 (){
	total = total + 20;
	$('#out').html(total);
}

function add30 (){
	total = total + 30;
	$('#out').html(total);
}

function red (){
	$('#out').css('background', 'red');
}

function reset (){
	total = 0;
	$('#out').html(total);
	$('#out').css('background', 'white');
}

function blue (){
	$('#out').css('background', 'blue');
}

function minus10 (){
	total = total - 10;
	$('#out').html(total);
}

function minus20 (){
	total = total - 20;
	$('#out').html(total);
}

function minus30 (){
	total = total - 30;
	$('#out').html(total);
}
