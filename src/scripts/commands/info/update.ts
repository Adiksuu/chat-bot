const news: string = `v1.1.5:<br><br>Wprowadzono kilka poprawek pozostałych komend oraz wyglądu</span> <br><br>Nowa komenda <span id="underline" onclick="setInput('/user ip')"> /user ip</span> wyświetla ona IP użytkownika <br><br>Nowa komenda <span id="underline" onclick="setInput('/offend')"> /offend [imie]</span> wyświetla ona losowy opis podanego imienia <br>v1.1.5(1): <br>Dodano wyświetlanie nowych komend w zakładce dokumentacji` 
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`
}