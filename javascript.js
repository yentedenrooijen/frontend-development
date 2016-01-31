/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

// selecteert de lijst die ik aan en uit willen zetten
var project = document.body.querySelector('fieldset:nth-child(3)');
project.classList.add('hidden'); // hide deze fieldset

// selecteert de lijst die ik aan en uit willen zetten
var stage = document.body.querySelector('fieldset:nth-child(4)');
stage.classList.add('hidden'); // hide deze fieldset


// select first radio button you can find
document.body.querySelector('input[type="radio"]:first-of-type').onclick = function() {
    project.classList.add('show');
    stage.classList.remove('show');}

// select the button with stage value
document.body.querySelector('input[value="stage"]').onclick = function() {
    project.classList.remove('show');
    stage.classList.add('show');}
