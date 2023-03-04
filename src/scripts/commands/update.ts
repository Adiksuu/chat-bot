const news: string = 'Wyświetlanie pakietu bota (domyślnie "Standard"). <br><br>Nową komendę /news która wyświetla ostatnio dodane nowości. <br><br> Nowa komenda /package wyświetlająca aktualny pakiet bota <br><br> Nowa komenda /youtube <wyszukaj>, która wyszukuję podaną frazę a następnie ją wyświetla' 
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`
}