class libro {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }
}

const inputGeneroAutor = document.getElementById("Genero-autor"); //btn buscar
const librosFiltrados = document.getElementById("libros-filtrados");
const btnBuscar = document.getElementById("btn-search");

const btnfilter = document.getElementById("filter-libros");
const btnDisponibles = document.getElementById("disponibles");
const pLibros = document.getElementById("libros-disponibles");



let libros = [new libro("El señor de los anillos", "J.R.R. Tolkien", 1954, "Fantasía"), new libro("Harry Potter", "J.K. Rowling", 2000, "Fantasía"), new libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico")];


btnBuscar.addEventListener("click", function () {
    let generoAutor = inputGeneroAutor.value;
    let librosPorFiltracion = libros.filter(libro => libro.genero === generoAutor || libro.autor === generoAutor || libro.titulo === generoAutor);
    for (let i = 0; i < librosPorFiltracion.length; i++) {
        librosFiltrados.innerHTML += 'Libro ' + i +' AUTOR:' + librosPorFiltracion[i].titulo + ' ' + librosPorFiltracion[i].autor + ' ' + librosPorFiltracion[i].año + ' ' + librosPorFiltracion[i].genero + '<br>';
    }
})

btnDisponibles.addEventListener("click", function () {
    for (let i = 0; i < libros.length; i++) {
        pLibros.innerHTML += '-Libro ' + i + ', TITULO: ' + libros[i].titulo + ', AUTOR: ' + libros[i].autor + ',AÑO: ' + libros[i].año + 'GENERO: ' + libros[i].genero + '<br>';
        
    }
})







