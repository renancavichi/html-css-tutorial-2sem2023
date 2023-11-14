const getMovies = async () =>{
    const inputName = document.querySelector('#txt-name')
    const divResult = document.querySelector('#result')
    
    divResult.innerHTML = '<p>Carregando...</p>'

    const response = await fetch(`https://search.imdbot.workers.dev/?q=${inputName.value}`, {
        method: 'GET'
    })
    
    if(response.ok){
        const data = await response.json()
        console.log(data)
        divResult.innerHTML = ''
        data.description.map((movie)=>{
            divResult.innerHTML += `
            <div class="card-product">
              <img src="${movie['#IMG_POSTER']}" alt="${movie['#TITLE']}">
              <div>
                <h5>${movie['#TITLE']}</h5>
                <span>${movie['#YEAR']}</span>
              </div>
            </div>
        ` 
        })
    } else {
        if(response.status === 404){
            divResult.innerHTML = '<p>Rota não encontrada...</p>'
        } else {
            divResult.innerHTML = '<p>Erro na requisição...</p>'
        }
    } 
}