const news: string = `<br>Naprawiono funkcjonalność komendy <span id="underline" onclick="setInput('/randomimage')"> /randomimage</span> oraz dodano jej wyświetlanie w dokumentacji <span id="underline" onclick="setInput('/docs')"> /docs</span><br><br>Nowa komenda <span id="underline" onclick="setInput('/check')">/check [0-9]</span>, losuje ona liczbę 0-9 a użytkownik próbuję ją zgadnąć, za każdym razem jest ona inna! <br><br>Wprowadzono kilka poprawek pozostałych komend oraz wyglądu</span>` 
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`
}