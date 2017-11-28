var about = $('#media-0');
var nic = $('#media-1');
var dancing = $('#media-2');
var concrete = $('#media-3');
var succulent = $('#media-4');
var copenhagen = $('#media-5');
var cal = $('#media-6');
var fnl = $('#media-7');
var withnail = $('#media-8');
var mug = $('#media-9');
var didion = $('#media-10');
var fall = $('#media-11');
var clash = $('#media-12');
var gump = $('#media-13');
var tilda = $('#media-14');

nic.hide();
dancing.hide();
concrete.hide();
succulent.hide();
copenhagen.hide();
cal.hide();
fnl.hide();
withnail.hide();
mug.hide();
didion.hide();
fall.hide();
clash.hide();
gump.hide();
tilda.hide();


$('#click-again').hide();

var myMedia = [nic, dancing, concrete, succulent, copenhagen, cal, fnl, withnail, mug, didion, fall, clash, gump, tilda];
var counter = 0;



$('#click-me').click(firstClick);

console.log (counter)
function firstClick (){
	if (counter === 0) {
		$(about).hide();
		$('#media').show();
		myMedia[counter].show();
		myMedia[myMedia.length - 1].hide();
	}
	else if (counter !== 0 && counter < 16) {
		myMedia[counter - 1].hide();
		myMedia[counter].show();	
	}

	counter = counter + 1;
	console.log (counter)
	if (counter === myMedia.length) {
		counter = 0;
	}
}

