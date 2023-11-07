let movies = [
    
{name: "The Marsh King's Da", category: 'Suspense', cover: 'https://www.metacritic.com/a/img/resize/4bafa2d440fd8eb54b7416a6d7d5bc3fe288f51b/catalog/provider/2/2/2-2f4ef2043b041c0f4ad0279be3a75887.jpg?auto=webp&fit=cover&height=300&width=200'}
,
{name: 'Going to Mars: The', category: 'Ficção', cover: 'https://www.metacritic.com/a/img/resize/497adf6fd447d0c3822ae7ade0e9f99a9c429866/catalog/provider/2/2/2-342f31dbc267a9f0f2c22f0532288265.jpg?auto=webp&fit=cover&height=300&width=200'}

]

const addMovie = () => {
    const inputName = document.querySelector('#content .txt-name')
    const inputCategory = document.querySelector('#content .txt-category')
    const inputCover = document.querySelector('#content .txt-cover')
    
    const newMovie = {
        name: inputName.value,
        category: inputCategory.value,
        cover: inputCover.value
    }

    movies.push(newMovie)
    
    inputName.value = ''
    inputCategory.value = ''
    inputCover.value = ''
    showMovies()
}

const showMovies = () => {
    const divListMovies = document.querySelector('#movie-list')
    divListMovies.innerHTML = ''
    movies.map((movie)=>{
        divListMovies.innerHTML += `
                <div class="card-product">
                  <img src="${movie.cover}" alt="${movie.name}">
                  <div>
                    <h5>${movie.name}</h5>
                    <span>${movie.category}</span>
                  </div>
                </div>
            `
    })
}

const removeLastMovie = () => {
    movies.pop()
    showMovies()
}

const removeMovieByName = () => {
    const inputName = document.querySelector('#content .txt-name')

    const newMoviesArray = movies.filter((movie) => {
        return movie.name !== inputName.value
    })

    movies = newMoviesArray
    showMovies()
}