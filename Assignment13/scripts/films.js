// Problem 1: Getting Films
const GetFilms = async()=>{
    let filmsDescription = [];
    
    let url = 'https://ghibliapi.herokuapp.com/films';
    let response = await fetch(url);

    let films = await response.json();

    films.forEach(filmJSON => {
        let film = {
            title: filmJSON.title, 
            releaseDate: filmJSON.release_date,
            director: filmJSON.director,
            description: filmJSON.description
        }

        filmsDescription.push(film);
    });

    return filmsDescription;
}
