const URL = `https://api.github.com/users/marvin-ai/repos`;                                   /*github*/
// const URL = `https://randomuser.me/api/`;                                                     /*randomname*/

document.documentURI = './pagDeProduto.html';
var pagDeProduto = document.documentURI;

document.documentURI = './index.html';
var index = document.documentURI;

function createElement(tag) {
	return document.createElement(tag);
}
function getElelementById(id) {
	return document.getElelementById(id);
}

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
