const news: string = `<br><br>Nowa funkcjonalność, od teraz można uruchamiać w tle własną muzykę! Całością można zarządzać pod komendą <span id="underline" onclick="setInput('/music')"> /music [source/play/pause/loop/mute]</span><br><br>Aby wybrać muzykę, trzeba mieć ją pobraną na swoim komputerze, a następnie po wyborze <span id="underline" onclick="setInput('/music source')"> /music source</span> klikając zielony przycisk wybieracie wasz plik muzyczny` 
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`
}