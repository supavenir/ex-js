function setById(id,value){
  document.getElementById(id).innerHTML=value;
}

//Déclaration
function test(message){
  alert(message);
}
function test2(afaire,a,b){
  alert(afaire(a,b));
  console.log(arguments);
}

const maFunction=function(i,j){
  return i+j;
}

//setById('para','Nouvelle valeur');

//document.querySelector('#para').innerHTML='Test avec querySelector';
//document.querySelector('.item').style.color='red';

function allInRed(){
  document.querySelectorAll('.item, p').forEach((elm)=>{
    elm.style.color='red';
  });
}
window.addEventListener('load',()=>{
  console.log('page load');
  document.querySelector('button').addEventListener('click',(event)=>{
    allInRed();
  });
});

//Gestion des events

//test2(maFunction,5,12);

//Exécution
//test('Hello');

//alert(maFunction(2,5));
