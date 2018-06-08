const URL = `https://api.github.com/users/marvin-ai/repos`;                                   /*github*/
// const URL = `https://randomuser.me/api/`;                                                     /*randomname*/

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
			let lista = document.getElementById('nav');
			let li = createElement('li');
			let a = createElement('a');
			a.setAttribute('href', `./pagDeProjeto.html?name=${response[i].name}`)                 /*github*/
			// a.setAttribute('href', `./pagDeProjeto.html?name=${response.results[i].name.first}`)   /*randomname*/
      a.innerHTML = response[i].name;                                                        /*github*/
      // a.innerHTML = response.results[i].name.first;                                          /*randomname*/
			li.appendChild(a);
			lista.appendChild(li);
		};
	});
}
requerimento();