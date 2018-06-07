const cep = document.getElementById('cep');
const btn = document.getElementById('btn-search');
const renderInfo = document.getElementById('info');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const cepValue = cep.value;
    consultaCep(cepValue)
  });
  
  function consultaCep(cep) {
    const URL = `https://cep.webschool.io/api/br/${cep}`
    const request = fetch(URL)
  
    request
      .then(data => data.json())
      .then(data => {
        const { city, address, district, state } = data;
        createSectionInfo(city, address, district, state);
      });
  }
  
  function createSectionInfo(city, address, district, state) {
    const tableInfo = `
      <table class="table">
        <thead>
          <tr>
            <th>RUA</th>
            <th>BAIRRO</th>
            <th>CIDADE</td>
            <th>ESTADO</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${address}</td>
            <td>${district}</td>
            <td>${city}</td>
            <td>${state}</td>
          </tr>
        </tbody>
      </table>`
    renderInfo.innerHTML = tableInfo;
  }
  