(function( window ){

    var body = document.body,               
        togglePushLeft = $( ".toggle-push-left" ),       
        activeNav
    ;

    /* push menu left */
    togglePushLeft.on( "click", function(){
		 $(body).addClass("pml-open");      
         activeNav = "pml-open";
    } );

    /* hide active menu if close menu button is clicked */
	$(".close-menu").on( "click", function(){
			$(body).removeClass(activeNav);            
            activeNav = "";
          
        });
	
})( window );