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

<<<<<<< HEAD
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
		// const tam =  response.results.length;                                                    /*randomname*/


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
=======
function requerimento() {
  const request = fetch(URL);
	request.then((response) => response.json()).then((response) => {
    console.log(response);
    const tam =  response.length;                                                            /*github*/
    // const tam =  response.results.length;                                                    /*randomname*/
		for (let i = 0; i < tam; i++) {   
			let name = response[i].name;
			let lista = document.getElementById('nav');
			let li = createElement('li');
			let a = createElement('a');
			a.href = "./pagDeProjeto.html?name=${response[i].name}"                 /*github*/
			// a.setAttribute('href', `./pagDeProjeto.html?name=${response.results[i].name.first}`)   /*randomname*/
      a.innerHTML = name;                                                        /*github*/
      // a.innerHTML = response.results[i].name.first;                                          /*randomname*/
			li.appendChild(a);
			lista.appendChild(li);

			let forks = document.getElementById('topo-forks');
			forks.createElement('h4');
			forks.innerHTML = "forks-number";
			console.log(forks)                                                       /*github*/
      // forks.innerHTML = response.results[i].name.first;                                          /*randomname*/
			    
		};
	});

	var ordenalist = `$(".href")`;
	ordenalist.sort(function(a, b){
		return `$(b).attr(stars)` - `$(a).attr(stars)`
	});

// 	var divList = $(".produtos");
// divList.sort(function(a, b) {
//     // para ordem decrescente; use a - b para crescente
//     return $(b).attr("contagem") - $(a).attr("contagem")
// });
// $("#pai").html(divList);
}
requerimento();
>>>>>>> 402acf901ec7cc48e000e8ef7d1313703dce3699
