const URL = `https://api.github.com/users/marvin-ai/repos`
     function consulta() {
      
      const request = fetch(URL)
    
      request
        .then(response => response.json())
        .then(response => {
          console.log(response)
          // document.getElementById("container").innerHTML=response.results[0].name.first
        });
    }
    consulta();
    // function pegarDadosProcessados(url) {
    //   return baixarDados(url) // retorna uma Promise
    //     .catch(e => {
    //       return baixarDadosReservas(url) // retorna uma Promise
    //     })
    //     .then(v => {
    //       return processarDadosNoWorker(v); // retorna uma Promise
    //     });
    // }

    // listen (start app with node server.js) ======================================
    // app.listen(8080, () => {
    //   console.log("App listening on port 8080");
    //   pegarDadosProcessados();
    // });
    



  