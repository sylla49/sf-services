'use strict';

$().ready( ()=>{
	let hauteur = $(window).height();
	let wlager = $(window).width();
	let userAgent = navigator.userAgent;

	// alert("Largeur "+ wlager +"  Hauteur "+ hauteur+"  "+userAgent);

	const firefox = () =>{
		let userAgent = navigator.userAgent;

		if ( $(window).width() <= 412 || $(window).width() <= 414 ){
			$('.dv-ul1').hide();

			// alert("Note 20 Ultra 5G");
		}
	};
	firefox();

} );