jQuery(document).ready(function() {


//*** Read More and Read Less ****///
//***********************************
jQuery(".read_more a").on("click",function(){


// Prevent the a from running
	event.preventDefault()

// Expand paragraph
	jQuery(".show-this-on-click").toggle();

// Show the read less

// Hide the read more
	jQuery(".read_more a").hide();   

	});
         
// Minimize paragraph
jQuery(".readless_hide").on("click",function(){

	event.preventDefault()

	jQuery(".show-this-on-click").toggle();

	jQuery(".read_more a").show();

	});

//*********** Learn More *********///
//***********************************

jQuery(".learn_more a").on("click",function(){

// Prevent the a from running
	event.preventDefault()

// Expand paragraph
	jQuery(".appear-on-click").toggle();

// Hide the learn more

	jQuery(".learn_more a").hide();   

	});

// Minimize paragraph
jQuery(".learnless_hide").on("click",function(){

	event.preventDefault()

	jQuery(".appear-on-click").toggle();

	jQuery(".learn_more a").show();

});

});