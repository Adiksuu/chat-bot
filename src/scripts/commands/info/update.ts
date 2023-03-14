const news: string = `<br><br>Wprowadzono kilka poprawek pozostałych komend oraz wyglądu</span> <br><br>Nowa komenda <span id="underline" onclick="setInput('/user ip')"> /user ip</span> wyświetla ona IP użytkownika <br><br>Nowa komenda <span id="underline" onclick="setInput('/offend')"> /offend [imie]</span> wyświetla ona losowy opis podanego imienia` 
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`
}