// Renders alpha tab sheet music divs

function sleep(ms)
{
    return(new Promise(function(resolve, reject) {
        setTimeout(function() { resolve(); }, ms);
    })); 
}

  document.addEventListener('DOMContentLoaded', (event) => {
  	
	sleep(1000).then(function() { 
	  // $('#alphaTab').alphaTab() 
	  document.querySelectorAll('.notation').forEach(el => {
	  console.log("Found notation block " + el.id + ". Proceeding with rendering");
	  $("#" + el.id).alphaTab();	  
	  } );	  
	});
	//the event occurred
	// find all the notation divs
	// execute function
  });
