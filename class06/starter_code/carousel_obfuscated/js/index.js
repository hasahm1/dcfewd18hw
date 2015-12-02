//create variable or array
var images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg", "images/food4.jpg", "images/food5.jpg", "images/food6.jpg", "images/food7.jpg",];

var i = 0; 

//listen to click events
$(document).ready(function(){
$("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
$("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
/*why don't we use two different buttons in html?*/
});

//go to previous image
 function previousImage() {
/*xi>0 ? changeImage(--i):0;*/
// if index is greater than 0, increase in increments
if (i>0) {
	i = i-1;
	}
	$("#image-to-vote-on").attr("src", images[i]);
}

// function changeImage() {

	// $("#your-vote-option").prop("selected", false);




//go to next image
 function nextImage() {
/*xi>0 ? changeImage(--i):0;*/
if (i<images.length-1) {
	i = i+1;
	}
	$("#image-to-vote-on").attr("src", images[i]);

}

