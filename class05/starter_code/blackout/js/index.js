//listen for click

$('#light_switch').click(switchLights)

//create variable
var lights = 'on';

//on click, fire action
function switchLights() {
	if(lights == 'on') {
		$('body').addClass('dark');
		lights = 'off';
	} 

//background turns black or "off"
else {
		$('body').removeClass('dark');
		lights = 'on';
	}
}

