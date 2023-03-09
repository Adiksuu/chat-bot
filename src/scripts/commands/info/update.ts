const news: string = '<br>Została wprowadzona strona głowna ChatBota <span id="underline" onclick="toHome();">Strona Główna</span>, pracuję nad dokumentacją bota! Jeszcze przed wyjściem bota z wersji [Beta], dokumentacja powinna się pojawić! <br><br>Otwarcie informujemy, że powstało logo ChatBota! Mamy nadzieję, je zapamiętacie :D <img src="./src/assets/images/chatbot.png"></img>' 
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`
}