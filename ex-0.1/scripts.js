window.addEventListener('load',()=>{
	document.querySelector('#bt-somme').addEventListener('click',()=>{
		let a= parseInt(window.prompt('a ?',0));
		let b= parseInt(window.prompt('b ?',0));
		alert(`La somme de ${a} et ${b} est `+somme(a,b));
	});
	document.querySelector('#bt-somme-x').addEventListener('click',()=>{
		let a= parseInt(window.prompt('a ?',0));
		let b= parseInt(window.prompt('b ?',0));
		let c= parseInt(window.prompt('c ?',0));
		alert(`La somme de ${a},${b},${c} est `+sommeX(a,b,c));
	});
	
		document.querySelector('#bt-max-x').addEventListener('click',()=>{
		let a= parseInt(window.prompt('a ?',0));
		let b= parseInt(window.prompt('b ?',0));
		let c= parseInt(window.prompt('c ?',0));
		alert(`Le max de ${a},${b},${c} est `+maxX(a,b,c));
	});
});

function somme(a,b){
	return a+b;
}

function max(a,b){
	return (a>b)?a:b;
}

function maxX(){
	let result=arguments[0] || 0;
	for(let i=1;i<arguments.length;i++){
		if(arguments[i]>result){
			result=arguments[i];
		}
	}
	return result;
}


function sommeX(){
	let result=0;
	for(let i=0;i<arguments.length;i++){
		result+=arguments[i];
	}
	return result;
}

