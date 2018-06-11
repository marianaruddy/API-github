const URL = 'https://api.github.com/users/marvin-ai/repos'; /*github*/
// const URL = `https://randomuser.me/api/`; /*randomname*/

document.documentURI = './pagDeProduto.html';
var pagDeProduto = document.documentURI;
document.documentURI = './index.html';
var index = document.documentURI;
document.documentURI = './pagDeProduto.html';
var pagDeProduto = document.documentURI;
document.documentURI = './index.html';
var index = document.documentURI;

function createElement(tag) {
	return document.createElement(tag);
}
function getElemById(id) {
	return document.getElementById(id);
}
async function requerimento() {
	const request = await fetch(URL);
	return request.json();
};
const response = requerimento();
response.then(data => {
	console.log(data);
})

let i;
let name = [];
let numForks = [];
let numStars = [];
let numContribs = [];

response.then(response => {
	// console.log(project.name)
	const tam = response.length;
	for (i = 0; i < tam; i++) {
		name[i] = response[i].name;
		numForks[i] = response[i].forks_count;
		numStars[i] = response[i].stargazers_count;
		numContribs[i] = response[i].size;
		// console.log("forks : " + numForks)
		// console.log("stars: " + numStars)
		// console.log("contibs: " + numContribs)

		// let numForks = 1;         															                                 /*randomname*/
		// let numStars = 1;         	                                                            /*github*/														                                 /*randomname*/
		// let numContribs = 1;         				                                                  /*github*/											                                 /*randomname*/
		let lista = getElemById('nav');
		let li = createElement('li');
		let a = createElement('a');
		a.innerHTML = name[i];
		a.href = "./pagDeProjeto.html?name=${response[i].name}" /*github*/
		li.appendChild(a);
		lista.appendChild(li);
		// a.setAttribute('href', `./pagDeProjeto.html?name=${response.results[i].name.first}`)   /*randomname*/
		// a.innerHTML = response.results[i].name.first;                                          /*randomname*/

	}

	for (i = 0; i < tam; i++) {
		console.log(i, numForks[i])
		if (window.location.href.includes(name[i])) {
			break;
		}
	}
})

function faz(response) {
	let forks = getElemById('forks-number');
	console.log(numForks[i])
	forks.innerHTML = numForks[i];
	let stars = getElemById('stars-number');
	console.log(stars)
	stars.innerHTML = numStars[i];
	let contribs = getElemById('contribs-number');
	contribs.innerHTML = numContribs[i];
	// forks[i].innerHTML = response[i].name.first; /*randomname*/

}

faz(response);

// var ordenalist = `$(".href")`;
// ordenalist.sort(function(a, b){
// 	return `$(b).attr(stars)` - `$(a).attr(stars)`
// });

// 	var divList = $(".produtos");
// divList.sort(function(a, b) {
//     // para ordem decrescente; use a - b para crescente
//     return $(b).attr("contagem") - $(a).attr("contagem")
// });
// $("#pai").html(divList);