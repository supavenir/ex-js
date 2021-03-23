window.addEventListener('load',()=>{
	document.getElementById('bt-run').addEventListener('click',()=>{
		let elm=document.getElementById('selector').value;
		let css=document.getElementById('style').value;
		document.querySelector(elm).style.cssText=css;
	});

});
