const URL = `https://randomuser.me/api/`;

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
    const tam =  response.results.length;
    // console.log(tam)
		for (let i = 0; i < tam; i++) {      
			let lista = document.getElementById('nav');
			let li = createElement('li');
			let a = createElement('a');
			a.setAttribute('href', '/');
      // a.innerHTML = response[i].name;
      a.innerHTML = response.results[i].name.first;
      console.log(a.innerHTML)
			li.appendChild(a);
			lista.appendChild(li);
		};
	});
}
requerimento();