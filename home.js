var filme1 = document.getElementById('filme1')
var filme2 = document.getElementById('filme2')
var filme3 = document.getElementById('filme3')
var filme4 = document.getElementById('filme4')

function genero() {
    switch (document.getElementById('genero').selectedIndex) {
        case 1:
            filme1.src = "imagens/A-1.jpg"
            filme2.src = "imagens/A-2.jpg"
            filme3.src = "imagens/A-3.jpg"
            filme4.src = "imagens/A-4.jpg"
            break;
        case 2:
            filme1.src = "imagens/B-1.jpg"
            filme2.src = "imagens/B-2.jpg"
            filme3.src = "imagens/B-3.jpg"
            filme4.src = "imagens/B-4.jpg"
            break;
        case 3:
            filme1.src = "imagens/C-1.jpg"
            filme2.src = "imagens/C-2.jpg"
            filme3.src = "imagens/C-3.jpg"
            filme4.src = "imagens/C-4.jpg"
            break;

    }
}
function abreLink1() {
    switch (document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/460465-mortal-kombat');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/615457-nobody');
            break;
        case 3:
            window.open('https://www.themoviedb.org/movie/717192-ferry');
            break;
    }
}
function abreLink2() {
    switch (document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/726429-xtremo');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/813258-monster-pets-a-hotel-transylvania-short');
            break;
        case 3:
            window.open('https://www.themoviedb.org/movie/522406-flashback');
            break;
    }
}

function abreLink3() {
    switch (document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/399566-godzilla-vs-kong');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/670428-pg-psycho-goreman');
            break;
        case 3:
            window.open('https://www.themoviedb.org/movie/793723-sentinelle');
            break;
    }
}

function abreLink4() {
    switch (document.getElementById('genero').selectedIndex) {
        case 1:
            window.open('https://www.themoviedb.org/movie/615658-awake');
            break;
        case 2:
            window.open('https://www.themoviedb.org/movie/726684-miraculous-world-shanghai-lady-dragon');
            break;
        case 3:
            window.open('https://www.themoviedb.org/movie/447332-a-quiet-place');
            break;
    }
}
