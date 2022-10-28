document.querySelector('p').textContent = '1er paragraphe du texte, c est bien';
let documentDiv = document.querySelector('div');
documentDiv.querySelector('p').textContent = '2eme paragraphe, la premiere du div';
document.querySelector('h1.rouge').style.color = '#17AA61';
document.querySelector('p.rouge').style.color = 'red';
document.querySelector('p.pizza').style.color = '#F41AE5';
let documentParas = document.querySelectorAll('p');
let divParas = documentDiv.querySelectorAll('p');
documentParas.forEach(function(nom, index){
    nom.textContent += ' (paragraphe n°:' + index + ')';
});
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
p4.parentNode.style.backgroundColor = '#3A078B';
let enfantsP3 = p3.childNodes;
enfantsP3[1].style.fontWeight = 'bold';
enfantsEltP3[0].style.textDecoration = 'underline';
