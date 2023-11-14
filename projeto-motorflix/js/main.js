const getVehicle = async (type) =>{
    const divResult = document.querySelector('#result')
    divResult.innerHTML = '<p>Carregando...</p>'

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas`, {
        method: 'GET'
    })
    
    if(response.ok){
        const data = await response.json()
        console.log(data)
        divResult.innerHTML = ''
        data.map((marca)=>{
            divResult.innerHTML += `<button onclick="getModels('${type}', ${marca.codigo})">${marca.nome}</button><br>` 
        })
    } else {
        if(response.status === 404){
            divResult.innerHTML = '<p>Rota não encontrada...</p>'
        } else {
            divResult.innerHTML = '<p>Erro na requisição...</p>'
        }
    } 
}

const getModels = async (type, idMarca) =>{
    const divResult = document.querySelector('#result')
    divResult.innerHTML = '<p>Carregando...</p>'

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${idMarca}/modelos`, {
        method: 'GET'
    })
    
    if(response.ok){
        const data = await response.json()
        console.log(data)
        divResult.innerHTML = ''
        data.modelos.map((model)=>{
            divResult.innerHTML += `<button onclick="getYears('${type}', ${idMarca}, ${model.codigo})">${model.nome}</button><br>` 
        })
    } else {
        if(response.status === 404){
            divResult.innerHTML = '<p>Rota não encontrada...</p>'
        } else {
            divResult.innerHTML = '<p>Erro na requisição...</p>'
        }
    } 
}

const getYears = async (type, idMarca, idModelo) =>{
    const divResult = document.querySelector('#result')
    divResult.innerHTML = '<p>Carregando...</p>'

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${idMarca}/modelos/${idModelo}/anos`, {
        method: 'GET'
    })
    
    if(response.ok){
        const data = await response.json()
        console.log(data)
        divResult.innerHTML = ''
        data.map((years)=>{
            divResult.innerHTML += `<button onclick="getAllInfo('${type}', '${idMarca}', '${idModelo}', '${years.codigo}')">${years.nome}</button><br>` 
        })
    } else {
        if(response.status === 404){
            divResult.innerHTML = '<p>Rota não encontrada...</p>'
        } else {
            divResult.innerHTML = '<p>Erro na requisição...</p>'
        }
    } 
}

const getAllInfo = async (type, idMarca, idModelo, idYear) =>{
    const divResult = document.querySelector('#result')
    divResult.innerHTML = '<p>Carregando...</p>'

    const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${type}/marcas/${idMarca}/modelos/${idModelo}/anos/${idYear}`, {
        method: 'GET'
    })
    
    if(response.ok){
        const data = await response.json()
        console.log(data)
        divResult.innerHTML = `
        <p>Marca: ${data.Marca}</p>
        <p>Modelo: <b>${data.Modelo}</b></p>
        <p>Ano Modelo: ${data.AnoModelo}</p>
        <p>Código Fipe: ${data.CodigoFipe}</p>
        <p>Combustivel: ${data.Combustivel}</p>
        <p>Valor: <b>${data.Valor}<b></p>
        `
    } else {
        if(response.status === 404){
            divResult.innerHTML = '<p>Rota não encontrada...</p>'
        } else {
            divResult.innerHTML = '<p>Erro na requisição...</p>'
        }
    } 
}