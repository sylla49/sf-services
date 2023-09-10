'use strict';

$().ready( ()=>{

	// window width and Height
	let hauteur = $(window).height();
	let wlager = $(window).width();

    /*
    {
          var OSName = "Unknown OS",
          if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
          if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
          if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
          if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
          if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
          console.log('Your OS: ' + OSName);
    }
    */

    // Browser infortion detecting 
    const browser = {
    	navVer: navigator.appVersion,
    	navCod: navigator.appCodeName,
    	naCook: navigator.cookieEnabled,
    	sysNam: navigator.platform,
        navAgt: navigator.userAgent,
        navNam: navigator.appName,

        checkBrowser: ()=>{
        	alert("App Version "+browser.navVer+"\n"+"userAgent "+browser.navAgt+"\n"+"Platform "+browser.sysNam);
        }
    };
    browser.checkBrowser();


    // Some body moditfications

    let mlogo = $('#imgs video'),
        img   = $('#imgs img');

    let change = setTimeout(()=>{
    	mlogo.slideUp("slow");
    	setTimeout(()=>{
    		// img.slideDown("fast");
    		img.toggle("slow");
    	}, 500);
    }, 3000);

} );