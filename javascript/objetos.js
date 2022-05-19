
var movie = new Object();

movie.title = 'Karate Kid';
movie.year = 1984;

movie.showInfo = function() {

    console.log(`Título do filme: ${this.title} - Lançado em: ${this.year}`);

}

movie.showInfo()

var serie = {

    title: 'Cobra Kai',
    seasons: 2,
    producer: 'Netflix',
    showInfo: function(){
        console.log(`Série: ${this.title} - Temporadas: ${this.seasons} - Produtor: ${this.producer}`)
    }

}

serie.showInfo()

console.log(movie.title)
console.log(serie.title)