function _flip() {
    const fliped = Math.floor(Math.random() * 2);
    let flip;
    if (fliped == 0) {
        flip = 'Orzeł';
    }
    else if (fliped == 1) {
        flip = 'Reszka';
    }
    answer = `Rzut monetą (50/50) wskazuje na: ${flip}`;
}
let counter = 0;
function _count(question) {
    if (question.includes('+')) {
        counter++;
    }
    else if (question.includes('-')) {
        counter--;
    }
    else if (question.includes('reset')) {
        counter = 0;
    }
    answer = `Liczba wynosi teraz: ${counter}`;
}
function _random() {
    let randomMax = 10 + 1;
    let randomNum = Math.floor(Math.random() * randomMax);
    answer = `Wylosowany numer to: ${randomNum}`;
}
function _repeat(question) {
    answer = question.substring(8);
}
function _response(question) {
    const random = Math.floor(Math.random() * 6);
    let res;
    if (random == 0) {
        res = 'Tak';
    }
    else if (random == 1) {
        res = 'Nie';
    }
    else if (random == 2) {
        res = 'Nie wiem';
    }
    else if (random == 3) {
        res = 'Być może';
    }
    else if (random == 4) {
        res = 'Chyba tak';
    }
    else if (random == 5) {
        res = 'Chyba nie';
    }
    if (question.includes('/response')) {
        question = question.substring(10);
    }
    else if (question.includes('/r')) {
        question = question.substring(3);
    }
    else {
        question = question.substring(11);
    }
    answer = `Odpowiedzią na twoje pytanie "${question}" to: ${res}`;
}
function _rps(question) {
    let botSelect = Math.floor(Math.random() * 3);
    if (botSelect == 0 && question.includes('rock')) {
        answer = `Bot też wybrał kamień! Remis!`;
    }
    else if (botSelect == 0 && question.includes('paper')) {
        answer = `Bot wybrał kamień! Wygrywasz!`;
    }
    else if (botSelect == 0 && question.includes('scissors')) {
        answer = `Bot wybrał kamień! Przegrywasz!`;
    }
    else if (botSelect == 1 && question.includes('rock')) {
        answer = `Bot wybrał papier! Przegrywasz!`;
    }
    else if (botSelect == 1 && question.includes('paper')) {
        answer = `Bot też wybrał papier! Remis!`;
    }
    else if (botSelect == 1 && question.includes('scissors')) {
        answer = `Bot wybrał papier! Wygrywasz!`;
    }
    else if (botSelect == 2 && question.includes('rock')) {
        answer = `Bot wybrał nożyce! Wygrywasz!`;
    }
    else if (botSelect == 2 && question.includes('paper')) {
        answer = `Bot wybrał nożyce! Przegrywasz!`;
    }
    else if (botSelect == 2 && question.includes('scissors')) {
        answer = `Bot też wybrał nożyce! Remis!`;
    }
    else {
        answer = '<i class="fas fa-circle-exclamation"></i> Wystąpił błąd! Spróbuj ponownie';
    }
}
function _clear() {
    chat.innerHTML = '';
    answer = '<i class="fas fa-check-circle"></i> Pomyślnie wyczyszczono chat!';
}
function _help() {
    answer = `Szukasz pomocy? zajrzyj na tę <a href="#">stronę</a> aby wyświetlić dokumentację z pełną listą komend oraz poleceń, na które jestem w stanie odpowiedzieć`;
}
const body = document.querySelector('body');
function _theme() {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {
        answer = '<i class="fas fa-sun"></i> Zmieniono motyw na: jasny';
    }
    else {
        answer = '<i class="fas fa-moon"></i> Zmieniono motyw na: ciemny';
    }
}
function _version() {
    answer = `Aktualna moja wersja to: ${version}, wprowadzona ${updated}`;
}
function _data() {
    const date = new Date();
    if ((date.getMonth() + 1) > 0 && (date.getMonth() + 1) < 9) {
        answer = `Aktualna data: ${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`;
        if (date.getDate() > 0 && date.getDate() < 9) {
            answer = `Aktualna data: 0${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    }
    else {
        answer = `Aktualna data: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
}
function _package() {
    answer = `Twój pakiet to: ${tier}`;
}
function _socials() {
    answer = `<a href="https://github.com/Adiksuu"><i class="fab fa-github"></i> Github</a> - Moje repozytoria z projektami<br><a href="https://behance.com/Adiksuu"><i class="fab fa-behance-square"></i> Behance</a> - Moje prace graficzne<br><a href="https://patreon.com/Adiksuu"><i class="fab fa-patreon"></i> Patreon</a> - Możliwość wsparcia :D`;
}
function _time() {
    const date = new Date();
    if (date.getMinutes() <= 9) {
        answer = `Aktualna godzina: ${date.getHours()}:0${date.getMinutes()}`;
    }
    else {
        answer = `Aktualna godzina: ${date.getHours()}:${date.getMinutes()}`;
    }
}
const news = 'Nowa komenda /socials, która wyświetla moje sociale <br><br>Nowa komenda /coinflip, umożliwia ona rzucenie monetą z 50% szansą na dany los <br><br>Nowa komenda /clear, czyści ona wątek z poprzednich wiadomości <br><br>Nowa komenda /wikipedia "nazwa", która umożliwia wyszukanie podanej frazy w wikipedii <br><br> Nowa komenda /google "nazwa", która umożliwia wyszukanie podanej frazy w wyszukiwarce google';
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`;
}
function _google(question) {
    question = question.substring(8);
    let googleSearch;
    if (question.length == question.split(' ').length - 1 || question == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`;
    }
    else {
        googleSearch = `https://www.google.com/search?q=${question}`;
        answer = `<i class="fab fa-chrome"></i> Wyszukano artykuły w serwisie Google: <a href='${googleSearch}'>Zobacz</a>`;
    }
}
function _wikipedia(question) {
    question = question.substring(11);
    let wikiSearch;
    if (question.length == question.split(' ').length - 1 || question == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`;
    }
    else {
        wikiSearch = `https://pl.wikipedia.org/wiki/${question}`;
        answer = `<i class="fab fa-wikipedia-w"></i> Wyszukano artykuły w serwisie Wikipedia: <a href='${wikiSearch}'>Zobacz</a>`;
    }
}
function _youtube(question) {
    let searchQuery = question.substring(9);
    if (searchQuery.length == searchQuery.split(' ').length - 1 || searchQuery == '') {
        answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono odpowiednich wyników dla podanej nazwy!`;
    }
    else {
        answer = `<i class="fab fa-youtube"></i> Wyszukano filmy w serwisie YouTube: <a href="https://www.youtube.com/results?search_query=${searchQuery}">zobacz</a>`;
    }
}
const form = document.querySelector('#input_form');
const input = document.querySelector('#input');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if ((input.value.length - input.value.split(' ').length - 1) > -2) {
        createMessage(input.value);
        input.value = '';
    }
});
function failedQuestion() {
    answer = '<i class="fas fa-circle-exclamation"></i> Niestety ale nie udało mi się znaleść odpowiedzi na twoje pytanie, sprawdź czy w mojej dokumentacji znajduję się podane przez ciebie pytanie. Jeśli tak, niezwłocznie zgłoś nam to, że nie wyświetlam odpowiedzi! Jeśli nie, spróbuj nam ją zaproponować!';
}
function checkAnswer(question) {
    if (!question.startsWith('/')) {
        if (!question.includes('+') && !question.includes('-') && !question.includes('*') && !question.includes('/')) {
            if (answers.hasOwnProperty(question)) {
                answer = answers[question];
            }
            else {
                failedQuestion();
            }
        }
        else {
            const inputValue = input.value.trim();
            let result;
            if (question.includes('+') || question.includes('-') || question.includes('*') || question.includes('/')) {
                result = eval(inputValue);
            }
            else {
                failedQuestion();
            }
            answer = `Wynikiem podanego działania jest: ${result}`;
        }
    }
    else {
        if (question.includes('data') || question.includes('date')) {
            _data();
        }
        else if (question.includes('version') || question.includes('ver') || question.includes('wersja')) {
            _version();
        }
        else if (question.includes('powtórz') || question.includes('repeat')) {
            _repeat(question);
        }
        else if (question.includes('help') || question.includes('pomoc')) {
            _help();
        }
        else if (question.includes('theme') || question.includes('motyw')) {
            _theme();
        }
        else if (question.includes('wikipedia')) {
            _wikipedia(question);
        }
        else if (question.includes('google')) {
            _google(question);
        }
        else if (question.includes('time') || question.includes('czas')) {
            _time();
        }
        else if (question.includes('news') || question.includes('nowości') || question.includes('zmiany') || question.includes('changes')) {
            _update();
        }
        else if (question.includes('package') || question.includes('pakiet')) {
            _package();
        }
        else if (question.includes('youtube')) {
            _youtube(question);
        }
        else if (question.includes('clear') || question.includes('wyczysc') || question.includes('czyszczenie')) {
            _clear();
        }
        else if (question.includes('random') || question.includes('los')) {
            _random();
        }
        else if (question.includes('coinflip') || question.includes('rzut monetą')) {
            _flip();
        }
        else if (question.includes('rps')) {
            _rps(question);
        }
        else if (question.includes('response') || question.includes('odpowiedz') || question.includes('r')) {
            _response(question);
        }
        else if (question.includes('count') || question.includes('licz')) {
            _count(question);
        }
        else if (question.includes('socials') || question.includes('sociale')) {
            _socials();
        }
        else {
            failedQuestion();
        }
    }
}
let answer;
const chat = document.querySelector(".chat");
function createMessage(title) {
    let message = document.createElement("div");
    title = title.toLowerCase();
    checkAnswer(title);
    message.classList.add("message");
    message.innerHTML = `<div class="message_title"><p>${title}</p></div><div class="message_content"><p>${answer}</p></div>`;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
    window.setTimeout(() => {
        message.classList.add('anim');
    }, 150);
}
const update_date = document.querySelector('#update_date');
const update_version = document.querySelector('#update_version');
const bot_tier = document.querySelector('#bot_tier');
const version = 'v1.0.4 [Beta]';
const updated = '05.03.2023';
const tier = 'Standard';
function update() {
    update_date.innerHTML = updated;
    update_version.innerHTML = version;
    bot_tier.innerHTML = tier;
}
const answers = {
    'czerwony': 'Kolor czerwony jest jednym z trzech podstawowych kolorów światła widzialnego, obok zielonego i niebieskiego. <br><br>Jest to kolor o długości fali około 620-750 nanometrów, co oznacza, że ma on najdłuższą długość fali spośród podstawowych kolorów. Kolor czerwony kojarzony jest z miłością, emocjami, energią i siłą. Jest często stosowany w symbolice, np. w flagach państwowych, logo firm czy symbolach religijnych. W psychologii koloru czerwonego przypisuje się wpływ na nasze emocje, może zwiększać poczucie pewności siebie, pobudzać i zwiększać tętno.',
    'pomarańczowy': 'Kolor pomarańczowy to mieszanka kolorów czerwonego i żółtego, o długości fali między 590 a 620 nanometrów. <br><br>Jest to kolor energetyczny i radosny, kojarzony z zachodem słońca, owocami cytrusowymi i ogniem. Pomarańczowy symbolizuje optymizm, przyjaźń, kreatywność i witalność. W psychologii koloru pomarańczowego przypisuje się wpływ na pobudzenie, zwiększenie koncentracji i motywację. Jest często stosowany w reklamie i projektowaniu graficznym, jako kolor przyciągający uwagę i zwiększający aktywność.',
    'żółty': 'Kolor żółty to kolor podstawowy, o długości fali między 570 a 590 nanometrów. Jest to kolor jasny, słoneczny i ciepły, kojarzony z promieniami słońca, kwiatami i owocami. <br><br>Żółty symbolizuje radość, optymizm, kreatywność i młodość. W psychologii koloru żółtego przypisuje się wpływ na pobudzenie i zwiększenie koncentracji, a także na poprawę nastrój i zmniejszenie stresu. W sztuce i designie żółty często stosowany jest jako kolor akcentowy, przyciągający uwagę i dodający energii. W symbolice żółty oznacza także mądrość i wiedzę.',
    'zielony': 'Kolor zielony to kolor podstawowy, o długości fali między 495 a 570 nanometrów. Jest to kolor natury, zieleni roślin, traw i lasów. Symbolizuje on harmonię, równowagę, świeżość i spokój. <br><br>W psychologii koloru zielonego przypisuje się wpływ na uspokojenie i redukcję stresu, a także na poprawę koncentracji i kreatywności. Kolor zielony jest często stosowany w symbolice ekologicznej i związanej z zrównoważonym rozwojem. W projektowaniu wnętrz i mody, zielony kojarzy się z naturalnością i prostotą.',
    'niebieski': 'Kolor niebieski to kolor podstawowy, o długości fali między 450 a 495 nanometrów. Jest to kolor spokojny, chłodny i kojący, kojarzony z niebem, wodą i lodem. Symbolizuje on mądrość, lojalność, prawdę i wiarę. <br><br>W psychologii koloru niebieskiego przypisuje się wpływ na redukcję stresu i poprawę koncentracji. Jest to kolor często stosowany w reklamie i projektowaniu graficznym, jako kolor kojarzony z profesjonalizmem i wiarygodnością. W sztuce i designie, niebieski jest często wykorzystywany jako kolor tła lub do dodania głębi. W symbolice religijnej, niebieski oznacza niebo i transcendencję.',
    'fioletowy': 'Kolor fioletowy to kolor o długości fali między 380 a 450 nanometrów, czyli jest to kolor krótkofalowy. Jest to kolor tajemniczy, elegancki i kreatywny, kojarzony z nocą, mgłą i gwiazdami. <br><br>Fioletowy symbolizuje marzenia, intuicję, duchowość i tajemniczość. W psychologii koloru fioletowego przypisuje się wpływ na uspokojenie, relaksację i zwiększenie kreatywności. Jest to kolor często stosowany w reklamie i projektowaniu graficznym, jako kolor przyciągający uwagę i kojarzący się z luksusem. W symbolice, fioletowy oznacza często królewskość i bogactwo.',
    'różowy': 'Kolor różowy to kolor otrzymywany przez połączenie koloru czerwonego i białego, co daje delikatny odcień bliski kolorowi czerwonemu. <br><br>Jest to kolor delikatny, romantyczny i kobiecy, kojarzony z kwiatami, cukierkami i dziecięcymi zabawkami. Różowy symbolizuje uczucia, miłość, delikatność i niewinność. W psychologii koloru różowego przypisuje się wpływ na uspokojenie i relaksację, ale także na zwiększenie energii i poprawę nastrój. Kolor różowy jest często stosowany w projektowaniu mody i wnętrz jako kolor kojarzący się z kobiecością i elegancją. W symbolice, różowy oznacza także walkę z rakiem piersi.',
    'czarny': 'Kolor czarny to kolor pozbawiony barwy, oznaczający brak światła lub pochłanianie go przez dany przedmiot. <br><br>Jest to kolor tajemniczy, elegancki i poważny, kojarzony z nocą, smutkiem i żałobą. Czarny symbolizuje potęgę, siłę, elegancję i formalność. W psychologii koloru czarnego przypisuje się wpływ na wprowadzenie powagi, ale także na zwiększenie poczucia depresji i osamotnienia. Czarny jest często stosowany w projektowaniu mody i wnętrz jako kolor kojarzący się z elegancją i prestiżem. W symbolice, czarny oznacza często żałobę, ale także siłę i niezłomność.',
    'biały': 'Kolor biały to kolor oznaczający pełne odbicie światła, pozbawiony barwnika i koloru. Jest to kolor czystości, niewinności i prostoty, kojarzony z chmurami, śniegiem i jedwabiem. Biały symbolizuje spokój, harmonię, czystość i równowagę.<br><br> W psychologii koloru białego przypisuje się wpływ na wprowadzenie poczucia spokoju i harmonii, ale także na zwiększenie poczucia izolacji i odczucia zimna. Biały jest często stosowany w projektowaniu wnętrz, architekturze i ubraniach jako kolor kojarzący się z elegancją i czystością. W symbolice, biały oznacza często niepokalanie poczętą Marię, ale także nadzieję i optymizm.',
    'szary': 'Kolor szary to kolor otrzymany przez połączenie koloru czarnego i białego, co daje odcień bliski kolorowi szarości.<br><br> Jest to kolor surowy, spokojny i poważny, kojarzony z betonem, metalami i deszczem. Szary symbolizuje stabilność, prostotę, dojrzałość i powagę. W psychologii koloru szarego przypisuje się wpływ na wprowadzenie poczucia stabilizacji i równowagi, ale także na zwiększenie poczucia nudności i monotonii. Szary jest często stosowany w projektowaniu mody, wnętrz i grafik jako kolor kojarzący się z elegancją i minimalizmem. W symbolice, szary oznacza często stabilność i siłę wewnętrzną.',
    'brązowy': 'Kolor brązowy to kolor otrzymany przez połączenie koloru czerwonego, żółtego i czarnego, co daje odcień bliski kolorowi brązowemu. <br><br>Jest to kolor ciepły, naturalny i rustykalny, kojarzony z drewnem, ziemią i liśćmi. Brązowy symbolizuje stabilność, ciepło, bezpieczeństwo i przyjazność. W psychologii koloru brązowego przypisuje się wpływ na wprowadzenie poczucia stabilizacji i bezpieczeństwa, ale także na zwiększenie poczucia masywności i stagnacji. Brązowy jest często stosowany w projektowaniu wnętrz, architekturze i modzie jako kolor kojarzący się z przytulnością i naturą. W symbolice, brązowy oznacza często ziemię, solidność i ciągłość życia.',
    'cześć': 'Witaj! Jestem ChatBot, w czym mogę pomóc?',
    'siema': 'Witaj! Jestem ChatBot, w czym mogę pomóc?',
    'witaj': 'Witaj! Jestem ChatBot, w czym mogę pomóc?',
    'dzieńdobry': 'Witaj! Jestem ChatBot, w czym mogę pomóc?',
    'dzień dobry': 'Witaj! Jestem ChatBot, w czym mogę pomóc?',
    'dobrywieczór': 'Witaj! Jestem ChatBot, w czym mogę pomóc?',
    'dobry wieczór': 'Witaj! Jestem ChatBot, w czym mogę pomóc?',
    'wiosna': 'Wiosna to pora roku, która charakteryzuje się stopniowym ociepleniem temperatury, roztapianiem śniegu, pojawieniem się kwitnących drzew i kwiatów oraz wydłużeniem dnia.<br><br> W tym okresie można również zauważyć wzmożoną aktywność zwierząt i ptaków, które powracają zimowymi kwaterami.',
    'lato': 'Lato to pora roku, która charakteryzuje się najwyższymi temperaturami, długimi dniami i krótkimi nocami.<br><br> W tym okresie wiele osób wyjeżdża na urlopy i wakacje, a wakacyjny sezon jest na szczycie. W upalne dni wiele osób szuka schronienia przed słońcem i upałem w parkach, na plażach czy w basenach.',
    'jesień': 'Jesień to pora roku, która charakteryzuje się zmniejszeniem temperatury, opadami deszczu, opadami liści z drzew oraz skróceniem dnia. <br><br>W tym okresie można zauważyć spadek aktywności zwierząt i ptaków, które przygotowują się do zimy.',
    'zima': 'Zima to pora roku, która charakteryzuje się niskimi temperaturami, śniegiem i mrozem. W tym okresie dni są krótkie, a noce długie. <br><br>Często występują też silne wiatry, a drzewa tracą swoje liście lub igliwie. Zima to czas, w którym wiele osób zajmuje się sportami zimowymi, takimi jak narciarstwo czy snowboard, a dzieci budują bałwany i sanki.',
    'java': 'Java to obiektowy język programowania stworzony w 1995 roku przez firmę Sun Microsystems. <br><br>Java jest wykorzystywana do tworzenia aplikacji webowych, mobilnych oraz desktopowych. Największą zaletą Javy jest jej przenośność - programy napisane w Javie mogą działać na różnych platformach bez konieczności ponownego kompilowania.',
    'python': 'Python to interpretowany język programowania stworzony w 1989 roku przez Guido van Rossuma. <br><br>Python jest popularny w dziedzinie analizy danych, uczenia maszynowego i sztucznej inteligencji, ale może być także stosowany do tworzenia aplikacji webowych, desktopowych i gier.',
    'cpp': 'C++ to język programowania stworzony na bazie języka C w 1983 roku przez Bjarne Stroustrupa. <br><br>C++ jest często stosowany w aplikacjach wymagających wydajności, takich jak gry komputerowe, systemy operacyjne czy oprogramowanie systemów wbudowanych.',
    'csharp': 'C# to obiektowy język programowania stworzony przez firmę Microsoft.<br><br> C# jest często stosowany w aplikacjach desktopowych, gier, aplikacjach mobilnych oraz w tworzeniu oprogramowania dla platformy .NET.',
    'javascript': 'JavaScript to skryptowy język programowania stworzony w 1995 roku przez firmę Netscape. <br><br>JavaScript jest głównie stosowany w tworzeniu stron internetowych, ale może być także używany do tworzenia aplikacji desktopowych i mobilnych.',
    'php': 'PHP to skryptowy język programowania stworzony w 1994 roku przez Rasmusa Lerdorfa. <br><br>PHP jest głównie stosowany do tworzenia stron internetowych i aplikacji webowych.',
    'ruby': 'Ruby to interpretowany język programowania stworzony w 1995 roku przez Yukihiro "Matz" Matsumoto. <br><br>Ruby jest często stosowany w tworzeniu stron internetowych i aplikacji webowych, a także w programowaniu gier i aplikacji desktopowych.',
    'kotlin': 'Kotlin to język programowania stworzony w 2011 roku przez firmę JetBrains. <br><br> Kotlin jest głównie stosowany w programowaniu aplikacji na platformę Android, ale może być także używany do tworzenia aplikacji desktopowych i serwerowych.',
    'go': 'Go to język programowania stworzony w 2009 roku przez firmę Google. <br><br>Go jest często stosowany do tworzenia aplikacji serwerowych i narzędzi programistycznych, ale może być także używany do tworzenia aplikacji desktopowych.',
    'rust': 'Rust to język programowania stworzony w 2010 roku przez firmę Mozilla. <br><br>Rust jest często stosowany w programowaniu systemów operacyjnych, sieciowych i wbudowanych, ale może być także używany do tworzenia aplikacji desktopowych.',
    'typescript': 'TypeScript to język programowania stworzony przez firmę Microsoft. <br><br>TypeScript jest rozszerzeniem języka JavaScript i dodaje do niego wiele funkcjonalności, takich jak statyczne typowanie i obiektowość. TypeScript jest często stosowany w tworzeniu dużych aplikacji webowych.',
    'dart': 'Dart to język programowania stworzony przez firmę Google. <br><br>Dart jest głównie stosowany do tworzenia aplikacji webowych i mobilnych na platformę Flutter.',
    'sql': 'SQL to język programowania stosowany do zarządzania bazami danych. <br><br>SQL jest często wykorzystywany w aplikacjach webowych, systemach zarządzania bazami danych oraz raportowaniu i analizowaniu danych.',
    "html": "HTML to język znaczników stosowany do tworzenia stron internetowych. <br><br>HTML pozwala na opisanie struktury dokumentu, dodawanie treści i określanie stylów wyświetlania.",
    "css": "CSS to język stylów stosowany do definiowania wyglądu stron internetowych napisanych w HTML. <br><br>CSS pozwala na określanie kolorów, czcionek, marginesów, wypełnień i innych właściwości wyglądu.",
    'instagram': '<i class="fab fa-instagram"></i> Instagram to platforma społecznościowa, która umożliwia użytkownikom udostępnianie zdjęć i filmów, a także komunikowanie się z innymi użytkownikami poprzez komentarze i prywatne wiadomości.<br><br> Wśród funkcji Instagrama znajdują się m.in. Stories, IGTV, Reels, a także narzędzia do edycji i filtrowania zdjęć.',
    'twitter': '<i class="fab fa-twitter"></i> Twitter to platforma społecznościowa, która umożliwia użytkownikom tworzenie krótkich postów o długości do 280 znaków. Użytkownicy mogą komunikować się ze sobą poprzez tzw. tweety oraz prywatne wiadomości. <br><br> Wśród funkcji Twittera znajdują się m.in. hasztagi, które umożliwiają łatwe wyszukiwanie tweetów z danym tagiem.',
    'linkedin': '<i class="fab fa-linkedin"></i> LinkedIn to platforma społecznościowa skierowana głównie do profesjonalistów i osób poszukujących pracy. Użytkownicy mogą tworzyć profile zawodowe, udostępniać informacje o swojej karierze, nawiązywać kontakty biznesowe oraz prowadzić działań marketingowych i reklamowych. <br><br>Wśród funkcji LinkedIna znajdują się m.in. grupy branżowe, możliwość publikowania artykułów i postów na swoim profilu, a także narzędzia do rekrutacji pracowników.',
    'tiktok': '<i class="fab fa-tiktok"></i> TikTok to platforma społecznościowa, która umożliwia użytkownikom tworzenie krótkich filmów i udostępnianie ich na platformie. Wśród funkcji TikToka znajdują się m.in. filtry, efekty specjalne oraz narzędzia do edycji filmów. <br><br> TikTok stał się bardzo popularny wśród młodszych użytkowników, którzy korzystają z tej platformy do tworzenia i udostępniania zabawnych filmów.',
    'facebook': '<i class="fab fa-facebook"></i> Facebook to największy na świecie serwis społecznościowy, który umożliwia użytkownikom dzielenie się treściami, jak zdjęcia, filmy, wiadomości i linki. <br><br> Facebook umożliwia również komunikację między użytkownikami, tworzenie grup i stron, a także reklamowanie produktów i usług.',
    'youtube': '<i class="fab fa-youtube"></i> YouTube to serwis internetowy, który umożliwia użytkownikom przeglądanie, udostępnianie i publikowanie filmów wideo. <br><br>Jest to jedna z największych platform wideo na świecie i zawiera mnóstwo różnorodnych treści, takich jak filmy instruktażowe, vlogi, filmy krótkometrażowe, teledyski i wiele innych.',
    'discord': '<i class="fab fa-discord"></i> Discord to popularna aplikacja umożliwiająca komunikację głosową i tekstową w czasie rzeczywistym. <br><br> Jest to narzędzie przeznaczone przede wszystkim dla graczy, jednak może być również stosowane przez innych użytkowników. Discord umożliwia tworzenie i dołączanie do serwerów, na których można prowadzić rozmowy prywatne lub publiczne, dzielić się plikami, oglądać filmy i wiele innych. Aplikacja ta oferuje również możliwość integracji z innymi serwisami i narzędziami, takimi jak Twitch, YouTube czy Spotify. <br><br>Użytkownicy mogą tworzyć boty, które automatyzują niektóre zadania na serwerze i ułatwiają zarządzanie nim. Discord cieszy się dużą popularnością wśród społeczności graczy i streamerów, ale z powodzeniem może być stosowany również w innych dziedzinach, takich jak edukacja, biznes czy prywatna komunikacja.',
    'messenger': '<i class="fab fa-facebook-messenger"></i> Messenger to aplikacja do komunikacji społecznej, stworzona przez firmę Facebook. Umożliwia użytkownikom wymianę wiadomości tekstowych, głosowych oraz obrazów. Aplikacja działa na różnych platformach, w tym na systemach operacyjnych iOS i Android, a także na komputerach. <br><br> Messenger jest jedną z najpopularniejszych aplikacji do komunikacji społecznej, ze względu na swoją wygodę i łatwość użytkowania. Użytkownicy mogą tworzyć grupy i rozmawiać z wieloma osobami jednocześnie, wysyłać pliki oraz korzystać z różnych emotikonów i naklejek. Aplikacja Messenger oferuje także funkcję dzwonienia głosowego i wideorozmów, co umożliwia użytkownikom prowadzenie rozmów w czasie rzeczywistym. Messenger jest także wykorzystywany przez firmy do kontaktu z klientami oraz do przeprowadzania działań marketingowych. <br><br> Dostępne są różne funkcje, takie jak chatboty, które umożliwiają firmom automatyzację odpowiedzi na pytania klientów. Podsumowując, Messenger to popularna aplikacja do komunikacji społecznej, oferująca wiele funkcji, takich jak wymiana wiadomości tekstowych, dzwonienie głosowe i wideorozmowy, a także chatboty dla firm.',
    'minecraft': 'Minecraft to popularna gra wideo, która została wydana w 2011 roku. Gracze wcielają się w rolę postaci zbudowanych z pikseli, którzy eksplorują świat wirtualny i tworzą własne struktury z bloków. <br><br> Gra oferuje kilka trybów, w tym tryb przetrwania, w którym gracze muszą zdobywać surowce i walczyć z potworami, oraz tryb kreatywny, który pozwala na nielimitowane zasoby, aby tworzyć niemal wszystko, co tylko chcesz.',
    'fortnite': 'Odpowiedź: Fortnite to gra wideo, która została wydana w 2017 roku przez firmę Epic Games. Gra jest rozgrywana w trybie wieloosobowym, a jej głównym celem jest przetrwanie w świecie pełnym potworów i innych graczy. <br><br>Gracze muszą zdobywać surowce i materiały, aby budować obronne struktury i bronie, a także współpracować z innymi graczami, aby przetrwać.',
    'league of legends': 'League of Legends to popularna gra wideo, która została wydana w 2009 roku. <br><br> Jest to gra typu MOBA (Multiplayer Online Battle Arena), w której dwie drużyny składające się z pięciu graczy walczą o kontrolę nad areną. Każdy gracz kontroluje jedną postać, która ma unikalne umiejętności i zdolności. <br><br>Gra jest bardzo konkurencyjna i wymaga od graczy taktyki, koordynacji i szybkich refleksów.',
    'gta5': 'Grand Theft Auto V to popularna gra wideo, która została wydana w 2013 roku. <br><br> Gra jest rozgrywana w trybie pojedynczego gracza lub wieloosobowego i oferuje otwarty świat, w którym gracze mogą wykonywać różne misje i wykonywać różne zadania. Gra oferuje również wiele opcji dostosowania postaci i pojazdów oraz interakcję z innymi graczami online.',
    'terraria': 'Terraria to 2D gra akcji typu sandbox, w której gracze mają do dyspozycji proceduralnie generowany świat, w którym mogą rozwijać swoje postaci, eksplorować środowisko i zbierać surowce. Gra oferuje różnorodne rodzaje rozgrywki, w tym walkę z bossami, budowanie baz i tworzenie przedmiotów, a także wiele różnych klas postaci, takich jak magowie, wojownicy czy łowcy. <br><br>Terraria umożliwia także tryb gry wieloosobowej, w którym gracze mogą współpracować lub rywalizować ze sobą. Gra jest dostępna na wiele platform, w tym PC, konsolach i urządzeniach mobilnych.',
    'roblox': 'Roblox to popularna gra online, która umożliwia użytkownikom tworzenie i dzielenie się własnymi grami, a także dołączanie do gier stworzonych przez innych użytkowników. W grze można budować swoje światy, projektować postacie, tworzyć przedmioty i wiele więcej. Roblox umożliwia graczom interakcję z innymi użytkownikami z całego świata, co czyni ją jedną z najbardziej społecznościowych gier online. W grze można grać w różne tryby, takie jak survival, battle royale, symulatory czy role-playing. <br><br>Jednym z głównych elementów gry jest tzw. Robux - wirtualna waluta, którą można zdobyć poprzez wykonywanie zadań lub zakupić za prawdziwe pieniądze. Robuxy można wykorzystać do zakupu przedmiotów w grze lub do budowania swojego świata. <br><br>Roblox cieszy się ogromną popularnością wśród dzieci i młodzieży, a także wśród dorosłych. Z powodu swojej prostoty i wielu możliwości, gra ta jest często stosowana w edukacji, jako narzędzie do nauki programowania, matematyki i innych przedmiotów.',
    'afganistan': 'Państwo położone w Azji Południowej, graniczące z Pakistanem, Iranem, Turkmenistanem, Uzbekistanem i Tadżykistanem. Kabul jest stolicą i największym miastem kraju. Afganistan był wielokrotnie nękany przez wojny i konflikty zbrojne, co skutkowało znacznym pogorszeniem sytuacji gospodarczej i społecznej w kraju.',
    'albania': 'Państwo położone na Bałkanach, graniczące z Czarnogórą, Kosowem, Macedonią Północną i Grecją. Tirana jest stolicą i największym miastem kraju. Albania jest krajem rozwijającym się o średnim poziomie rozwoju gospodarczego i kulturowego, z pięknymi plażami nad Morzem Adriatyckim i turystyką rozwijającą się w ciągu ostatnich kilku lat.',
    'algieria': 'Państwo w północnej Afryce, graniczące z Marokiem, Tunezją, Libią, Nigrem, Mauretanią, Saharą Zachodnią i Morzem Śródziemnym. Algier jest stolicą i największym miastem kraju. Algieria jest krajem o bardzo bogatej historii i kulturze, z różnorodnymi wpływami kulturowymi i artystycznymi z wielu krajów.',
    'andora': 'małe Państwo położone w Pirenejach, pomiędzy Francją i Hiszpanią. Andora (miasto) jest stolicą kraju i jego jedynym miastem. Andora jest jednym z najmniejszych państw na świecie i posiada bardzo niski poziom bezrobocia, który wynosi poniżej 3%.',
    'angola': 'Państwo położone w Afryce Środkowej, graniczące z Kongiem, Zambią, Namibią i Demokratyczną Republiką Konga. Luanda jest stolicą i największym miastem kraju. Angola jest krajem o złożonej historii i kulturze, z różnorodnymi językami i tradycjami etnicznymi.',
    'arabia saudyjska': 'Państwo w Azji Zachodniej, graniczące z Jordanią, Irakiem, Kuwejtem, Zjednoczonymi Emiratami Arabskimi, Omanem, Jemenem i Morzem Czerwonym. Rijad jest stolicą kraju i największym miastem. Arabia Saudyjska jest jednym z największych producentów ropy naftowej na świecie i posiada jedno z największych gospodarek w regionie.',
    'argentyna': 'Państwo w południowej Ameryce Południowej, graniczące z Brazylią, Paragwajem, Boliwią, Chile i Urugwajem. Buenos Aires jest stolicą i największym miastem kraju. Argentyna jest krajem o bogatej kulturze, znanym z tanga, futbolu i pięknych krajobrazów, takich jak góry Andy, lodowce i pustynie.',
    'armenia': 'Państwo w Azji Zachodniej, graniczące z Gruzją, Azerbejdżanem, Iranem i Turcją. Erywań jest stolicą kraju i największym miastem. Armenia jest krajem o długiej historii i kulturze, znanym z klasztorów i kościołów zbudowanych z różowych kamieni.',
    'australia': 'kraj położony na kontynencie o tej samej nazwie, na południowej półkuli Ziemi. Canberra jest stolicą kraju, a Sydney i Melbourne są dwoma największymi miastami. Australia jest krajem o różnorodnych krajobrazach, w tym pustyniach, lasach deszczowych i górach, znanym z kangurów, koali i innych unikalnych gatunków zwierząt.',
    'austria': 'Państwo w Europie Środkowej, graniczące z Niemcami, Czechami, Słowacją, Węgrami, Słowenią, Włochami i Liechtensteinem. Wiedeń jest stolicą kraju i jego największym miastem. Austria jest krajem o bogatej historii i kulturze, znanym z muzyki klasycznej, wina i pięknych krajobrazów Alp.',
    'azerbejdżan': 'Państwo w Azji Zachodniej, graniczące z Rosją, Gruzją, Armenią, Iranem i Morzem Kaspijskim. Baku jest stolicą kraju i największym miastem. Azerbejdżan jest krajem o bogatej historii i kulturze, znanym z baku (naturalnych źródeł naftowych), pięknych krajobrazów górskich i nadmorskich.',
    'bahrajn': 'Państwo na Bliskim Wschodzie, składające się z 33 wysp w Zatoce Perskiej. Manama jest stolicą kraju i jego największym miastem. Bahrajn jest krajem o bogatej historii i kulturze, znanym z pereł i pięknych krajobrazów, w tym pustyni i wybrzeża.',
    'bangladesz': 'Państwo w Azji Południowej, graniczące z Indiami, Mjanmą i Zatoką Bengalską. Dhaka jest stolicą kraju i jego największym miastem. Bangladesz jest jednym z najludniejszych krajów na świecie, znanym z ubóstwa, trudnych warunków życia i problemów związanych z ekologią.',
    'barbados': 'Państwo na Karaibach, na wschód od Saint Lucia. Bridgetown jest stolicą kraju i jego największym miastem. Barbados jest krajem o pięknych plażach, turystyce i kulturze, znanym z muzyki reggae i rumu.',
    'belgia': 'Państwo w Europie Zachodniej, graniczące z Holandią, Niemcami, Luksemburgiem i Francją. Bruksela jest stolicą kraju i jego największym miastem. Belgia jest krajem o bogatej historii i kulturze, znanym z czekolady, piwa i frytek.',
    'belize': 'Państwo w Ameryce Środkowej, graniczące z Meksykiem i Gwatemalą. Belmopan jest stolicą kraju, a Belize City jest jego największym miastem. Belize jest krajem o pięknych plażach, turystyce i dzikiej przyrodzie, znanym z raf koralowych i zrujnowanych miast Majów.',
    'benin': 'Państwo w Afryce Zachodniej, graniczące z Togo, Nigerią, Burkiną Faso i Wybrzeżem Kości Słoniowej. Porto-Novo jest stolicą kraju, a Kotonu jest jego największym miastem. Benin jest krajem o bogatej historii i kulturze, znanym z rytuałów voodoo, dzikiej przyrody i pięknych krajobrazów nadmorskich.',
    'bhutan': 'Państwo w Azji Południowej, graniczące z Chinami i Indiami. Thimphu jest stolicą kraju i jego największym miastem. Bhutan jest krajem o unikalnej kulturze i przyrodzie, znanym z Himalajów, klasztorów buddyjskich i szczególnej filozofii rozwoju opartej na "Wskaźniku Brutto Krajowego Szczęścia".',
    'białoruś': 'Państwo w Europie Wschodniej, graniczące z Rosją, Ukrainą, Polską, Litwą i Łotwą. Mińsk jest stolicą kraju i jego największym miastem. Białoruś jest krajem o burzliwej historii, znanym z przemysłu ciężkiego, dzikiej przyrody i pięknych zabytków.',
    'birma': 'Państwo w Azji Południowo-Wschodniej, graniczące z Bangladeszem, Indiami, Chinami, Laos i Tajlandią. Naypyidaw jest stolicą kraju, a Rangun jest jego największym miastem. Birma jest krajem o bogatej historii i kulturze, znanym z pagód, buddyjskich klasztorów i dzikiej przyrody.',
    'boliwia': 'Państwo w Ameryce Południowej, graniczące z Peru, Brazylią, Paragwajem, Argentyną i Chile. Sucre jest stolicą kraju, a La Paz jest jego największym miastem. Boliwia jest krajem o pięknych krajobrazach, znanym z Andów, Salar de Uyuni i dawnych cywilizacji Indian.',
    'bośnia i hercegowina': 'Państwo w Europie Południowo-Wschodniej, graniczące z Chorwacją, Serbią i Czarnogórą. Sarajewo jest stolicą kraju i jego największym miastem. Bośnia i Hercegowina jest krajem o burzliwej historii, znanym z kultury i zabytków z czasów osmańskich, wojny domowej z lat 90-tych XX wieku oraz pięknych krajobrazów górskich.',
    'botswana': "Państwo w Afryce Południowej, graniczące z RPA, Namibią, Zambią i Zimbabwe. Gaborone jest stolicą kraju i jego największym miastem. Botswana jest krajem o pięknych krajobrazach i dzikiej przyrodzie, znanym z Parku Narodowego Okawango, rezerwatów dzikiej przyrody i kulturze plemienia San.",
    'brazylia': 'Państwo w Ameryce Południowej, graniczące z Wenezuelą, Surinamem, Gujaną, Kolumbią, Peru, Boliwią, Paragwajem, Argentyną i Urugwajem. Brasília jest stolicą kraju, a São Paulo jest jego największym miastem. Brazylia jest krajem o bogatej kulturze i pięknych krajobrazach, znanym z plaż, dżungli Amazońskiej, karnawału w Rio de Janeiro i piłki nożnej.',
    'brunei': 'Państwo w Azji Południowo-Wschodniej, graniczące z Malezją i Morzem Południowochińskim. Bandar Seri Begawan jest stolicą kraju i jego największym miastem. Brunei to jedno z najmniejszych państw na świecie, ale jednocześnie jedno z najbogatszych. Jest to kraj z bogatą historią i kulturą, znanym z pięknych plaż, wspaniałych rezerwatów przyrody i luksusowych hoteli.',
    'bułgaria': 'Państwo w Europie Wschodniej, graniczące z Turcją, Grecją, Macedonią, Serbią i Rumunią. Sofia jest stolicą kraju i jego największym miastem. Bułgaria jest krajem o bogatej historii i pięknych krajobrazach, znanym z ładnych plaż nad Morzem Czarnym, wspaniałych gór i dolin, a także z zabytków z czasów starożytnych cywilizacji.',
    'burkina faso': 'Państwo w Afryce Zachodniej, graniczące z Mali, Nigrem, Wybrzeżem Kości Słoniowej, Ghanią, Togo i Beninem. Wagadugu jest stolicą kraju i jego największym miastem. Burkina Faso jest krajem o pięknych krajobrazach i bogatej kulturze, znanym z Parku Narodowego W-Arly-Pendjari, muzyki ludowej i festiwali.',
    'burundi': 'Państwo w Afryce Wschodniej, graniczące z Tanzanią, Rwandą i Kongiem. Gitega jest stolicą kraju, a Bujumbura jest jego największym miastem. Burundi to kraj o pięknych krajobrazach i dzikiej przyrodzie, znanym z Parku Narodowego Kibira, kultury ludowej i muzyki.',
    'chile': 'Państwo w Ameryce Południowej, graniczące z Peru, Boliwią i Argentyną. Santiago jest stolicą kraju i jego największym miastem. Chile to kraj o pięknych krajobrazach i bogatej kulturze, znanym z Andów, Atakamy, Torres del Paine, pięknych plaż i winnic.',
    'chiny': 'Państwo w Azji Wschodniej, graniczące z Rosją, Mongolią, Kazachstanem, Koreą Północną, Koreą Południową, Wietnamem, Laos, Mjanmą, Bhutanem, Nepal, Indiami, Pakistanem i Afganistanem. Pekin jest stolicą kraju, a Szanghaj jest jego największym miastem. Chiny to kraj o długiej i bogatej historii, znanym z Wielkiego Muru, Zakazanego Miasta, pięknych krajobrazów górskich, chińskiej kuchni i kultury.',
    'chorwacja': 'Państwo w Europie Południowo-Wschodniej, graniczące z Słowenią, Węgrami, Bośnią i Hercegowiną, Serbią oraz Czarnogórą. Zagrzeb jest stolicą kraju i jego największym miastem. Chorwacja to kraj o pięknych krajobrazach i bogatej historii, znanym z wspaniałych plaż nad Adriatykiem, pięknych wysp, wspaniałych parków narodowych, kultury dalmatyńskiej i zabytków z czasów starożytnych cywilizacji.',
    'cypr': 'Państwo w Europie Południowo-Wschodniej, leżące na Morzu Śródziemnym, graniczące z Turcją. Nikozja jest stolicą kraju i jego największym miastem. Cypr to kraj o pięknych krajobrazach, znanym z wspaniałych plaż, zabytków z czasów starożytnych cywilizacji, kultury greckiej i tureckiej oraz wspaniałych winnic.',
    'czad': "Państwo w Afryce Środkowej, graniczące z Libią, Nigerem, Nigerią, Kamerunem, Republiką Środkowoafrykańską i Sudanem. N'Djamena jest stolicą kraju i jego największym miastem. Czad to kraj o pięknych krajobrazach i bogatej kulturze, znanym z Parku Narodowego Zakouma, kultury ludowej i tradycyjnej muzyki.",
    'czechy': 'Państwo w Europie Środkowej, graniczące z Niemcami, Polską, Słowacją i Austrią. Praga jest stolicą kraju i jego największym miastem. Czechy to kraj o bogatej historii i pięknych krajobrazach, znanym z zamków, zabytków z czasów starożytnych cywilizacji, piwnic z piwem, kultury ludowej i tradycyjnej muzyki.',
    'dania': 'Państwo w Europie Północnej, graniczące z Niemcami i Szwecją. Kopenhaga jest stolicą kraju i jego największym miastem. Dania to kraj o pięknych krajobrazach, znanym z pięknych plaż, wspaniałych zamków, muzeów sztuki, kultury nordyckiej i tradycyjnej muzyki.',
    'demokratyczna republika konga': 'państwo w Afryce Środkowej, graniczące z Republiką Środkowoafrykańską, Sudanem Południowym, Ugandą, Rwandą, Burundi, Tanzanią, Zambią, Angolą i Kongiem. Kinszasa jest stolicą kraju i jego największym miastem. Demokratyczna Republika Konga to kraj o pięknych krajobrazach i dzikiej przyrodzie, znanym z Parku Narodowego Virunga, Parku Narodowego Kahuzi-Biega, muzyki ludowej i tradycyjnej kultury.',
    'dominika': 'Państwo na Karaibach, leżące na wschód od Haiti. Roseau jest stolicą kraju i jego największym miastem. Dominika to kraj o pięknych krajobrazach, znanym z wspaniałych plaż, kultury kreolskiej, muzyki reggae i soca, a także z popularnego festiwalu muzycznego "Creole in the Park"',
    'dominikana': 'Państwo na Karaibach, leżące na wschód od Haiti. Santo Domingo jest stolicą kraju i jego największym miastem. Dominikana to kraj o pięknych krajobrazach, znanym z wspaniałych plaż, Parku Narodowego Los Haitises, kultury kreolskiej, muzyki merengue i bachata, a także z popularnego festiwalu karnawałowego.',
    'dżibuti': 'Państwo w Afryce Wschodniej, graniczące z Erytreą, Etiopią i Somalią, a także z Zatoką Adeńską i Morzem Czerwonym. Dżibuti jest stolicą kraju i jego największym miastem. Dżibuti to kraj o pięknych krajobrazach i bogatej kulturze, znanym z Parku Narodowego Day Forest, muzyki ludowej i tradycyjnej sztuki.',
    'egipt': 'Państwo w Afryce Północnej, graniczące z Libią, Sudanem, Izraelem i Palestyną. Kair jest stolicą kraju i jego największym miastem. Egipt to kraj o bogatej historii, pięknych krajobrazach i zabytkach z czasów starożytnych cywilizacji, znanym z piramid, świątyń, Muzeum Egipskiego, kultury arabskiej i muzyki.',
    'ekwador': 'Państwo w Ameryce Południowej, graniczące z Kolumbią i Peru, a także z Oceanem Spokojnym. Quito jest stolicą kraju, a Guayaquil jest jego największym miastem. Ekwador to kraj o pięknych krajobrazach, znanym z Parku Narodowego Galapagos, Parku Narodowego Cajas, kultury indiańskiej, muzyki andyjskiej i karnawału.',
    'erytrea': 'Państwo w Afryce Wschodniej, graniczące z Etiopią, Sudanem i Morzem Czerwonym. Asmara jest stolicą kraju i jego największym miastem. Erytrea to kraj o pięknych krajobrazach i bogatej kulturze, znanym z Parku Narodowego Dahlak, muzyki ludowej i tradycyjnej sztuki.',
    'estonia': 'Państwo w Europie Północnej, graniczące z Rosją, Łotwą i Morzem Bałtyckim. Tallinn jest stolicą kraju i jego największym miastem. Estonia to kraj o pięknych krajobrazach, znanym z pięknych plaż, wspaniałych zamków, muzeów sztuki, kult.',
    'etiopia': 'Państwo w Afryce Wschodniej, graniczące z Sudanem, Erytreą, Dżibutiem, Somalią, Kenią i Republiką Południowej Afryki. Addis Abeba jest stolicą kraju i jego największym miastem. Etiopia to kraj o pięknych krajobrazach, znanym z Parku Narodowego Simien, Parku Narodowego Bale, kultury etiopskiej, muzyki ludowej i karnawału.',
    'fidżi': 'kraj wyspiarski w południowym Pacyfiku, składający się z ponad 330 wysp. Suva jest stolicą kraju i jego największym miastem. Fidżi to kraj o pięknych krajobrazach, znanym z koralowych raf, wspaniałych plaż, Parku Narodowego Bouma, kultury fidżyjskiej, muzyki ludowej i festiwalu Bula.',
    'filipiny': 'Państwo wyspiarskie w Azji Południowo-Wschodniej, składające się z ponad 7 000 wysp. Manila jest stolicą kraju i jego największym miastem. Filipiny to kraj o pięknych krajobrazach, znanym z wspaniałych plaż, wulkanów, Parku Narodowego Puerto Princesa, kultury filipińskiej, muzyki ludowej i festiwali, takich jak Sinulog i Ati-Atihan.',
    'finlandia': 'Państwo w Europie Północnej, graniczące z Norwegią, Szwecją i Rosją. Helsinki jest stolicą kraju i jego największym miastem. Finlandia to kraj o pięknych krajobrazach, znanym z pięknych jezior, lasów, fiordów, muzeów sztuki, kultury lapońskiej, muzyki metalowej i festiwali, takich jak Ruisrock i Flow Festival.',
    'francja': "Państwo w Europie Zachodniej, graniczące z Belgią, Luksemburgiem, Niemcami, Szwajcarią, Włochami, Monako, Andorą, Hiszpanią i Wielką Brytanią. Paryż jest stolicą kraju i jego największym miastem. Francja to kraj o pięknych krajobrazach, znanym z pięknych zamków, winnic, Alp, muzeów sztuki, kultury francuskiej, muzyki popowej i festiwali, takich jak Rock en Seine i Festival d'Avignon.",
    'gabon': 'Państwo w Afryce Środkowej, graniczące z Kamerunem, Kongiem, Gwineą Równikową i Oceanem Atlantyckim. Libreville jest stolicą kraju i jego największym miastem. Gabon to kraj o pięknych krajobrazach, znanym z Parku Narodowego Loango, kultury fang, muzyki tradycyjnej i festiwalu Mi-Sa.',
    'gambia': 'Państwo w Afryce Zachodniej, otoczone przez Senegal, położone nad Oceanem Atlantyckim. Banjul jest stolicą kraju i jego największym miastem. Gambia to kraj o pięknych krajobrazach, znanym z Parku Narodowego Kiang West, pięknych plaż, kultury gambijskiej, muzyki ludowej i festiwalu Rootsi Beach Festival.',
    'ghana': 'Państwo w Afryce Zachodniej, graniczące z Wybrzeżem Kości Słoniowej, Burkina Faso, Togo i Oceanem Atlantyckim. Akra jest stolicą kraju i jego największym miastem. Ghana to kraj o pięknych krajobrazach, znanym z Parku Narodowego Kakum, wodospadów Kintampo, kultury ghanyjskiej, muzyki highlife i festiwalu Chale Wote.',
    'grecja': 'Państwo w Europie Południowej, graniczące z Albanią, Macedonią Północną, Bułgarią i Turcją. Ateny są stolicą kraju i jego największym miastem. Grecja to kraj o pięknych krajobrazach, znanym z pięknych plaż, starożytnych zabytków, greckiej kuchni, kultury greckiej, muzyki rebetiko i festiwali, takich jak Rockwave i Epidaurus Festival.',
    'grenada': "Państwo wyspiarskie w południowej części Karaibów, położone na północ od Wybrzeża Wenezuelskiego. St. George's jest stolicą kraju i jego największym miastem. Grenada to kraj o pięknych krajobrazach, znanym z pięknych plaż, Parku Narodowego Grand Etang, kultury kreolskiej, muzyki calypso i festiwalu Spice Mas.",
    'gruzja': 'Państwo w Azji Zachodniej, graniczące z Rosją, Turcją, Armenią i Azerbejdżanem. Tbilisi jest stolicą kraju i jego największym miastem. Gruzja to kraj o pięknych krajobrazach, znanym z Kaukazu, winnic, starych miast, kultury gruzińskiej, muzyki chaczapuri i festiwali, takich jak Tbilisi Open Air i Tbilisi Jazz Festival.',
    'gwatemala': 'Państwo w Ameryce Środkowej, graniczące z Meksykiem, Belize, Hondurasem i Salwadorem. Guatemala to kraj o pięknych krajobrazach, znanym z wulkanów, dżungli, parków narodowych, takich jak Tikal, kultury Majów, muzyki mariachi i festiwali, takich jak Dia de los Muertos. Stolica kraju to miasto Guatemala, a największym miastem jest Quetzaltenango.',
    'gwinea': 'Państwo w Afryce Zachodniej, graniczące z Senegalem, Mali, Wybrzeżem Kości Słoniowej, Liberią, Sierra Leone i Gwineą Bissau. Konakry jest stolicą kraju i jego największym miastem. Gwinea to kraj o pięknych krajobrazach, znanym z Parku Narodowego Ziama, pięknych plaż, kultury gwinejskiej, muzyki soukous i festiwalu Fête de la Musique.',
    'gwinea równikowa': 'Państwo w Afryce Środkowej, graniczące z Kamerunem i Gabonem, położone w Zatoce Gwinejskiej. Malabo jest stolicą kraju i jego największym miastem. Gwinea Równikowa to kraj o pięknych krajobrazach, znanym z Parku Narodowego Monte Alen, pięknych plaż, kultury fang, muzyki tradycyjnej i festiwalu Fang Nku.',
    'haiti': 'Państwo wyspiarskie w Ameryce Środkowej, położone na zachód od Dominikany. Port-au-Prince jest stolicą kraju i jego największym miastem. Haiti to kraj o pięknych krajobrazach, znanym z Parku Narodowego La Visite, pięknych plaż, kultury kreolskiej, muzyki kompa i festiwalu Carnaval de Jacmel.',
    'hiszpania': 'Państwo w Europie Południowej, graniczące z Portugalią, Francją, Andorą, Marokiem i Wielką Brytanią (Gibraltar). Madryt jest stolicą kraju i jego największym miastem. Hiszpania to kraj o pięknych krajobrazach, znanym z Kordyliery Iberyjskiej, Parku Narodowego Doñana, kultury hiszpańskiej, muzyki flamenco i festiwali, takich jak La Tomatina i San Fermin.',
    'honduras': "Państwo w Ameryce Środkowej, graniczące z Gwatemalą, Salwadorem i Nikaraguą. Tegucigalpa jest stolicą kraju i jego największym miastem. Honduras to kraj o pięknych krajobrazach, znanym z Parku Narodowego Pico Bonito, pięknych plaż na wybrzeżu Morza Karaibskiego i Oceanu Spokojnego, kulturze lenca, muzyce punta i festiwalu Semana Santa.",
    'indie': "Państwo w Azji Południowej, graniczące z Pakistanem, Chinami, Mjanmą, Bangladeszem, Butanem i Nepalem. Nowe Delhi jest stolicą kraju, a Mumbai (Bombaj) jego największym miastem. Indie to kraj o pięknych krajobrazach, znanym z Himalajów, Parku Narodowego Kaziranga, pięknych plaż na wybrzeżu Oceanu Indyjskiego, kulturze indyjskiej, muzyce bollywoodzkiej i festiwalach takich jak Holi, Diwali czy Durga Puja.",
    'indonezja': 'Państwo wyspiarskie w Azji Południowo-Wschodniej, składające się z setek tysięcy wysp, graniczące z Papuą-Nową Gwineą, Timorem Wschodnim i Malezją. Dżakarta jest stolicą kraju i jego największym miastem. Indonezja to kraj o pięknych krajobrazach, znanym z Komodo National Park, wulkanów, pięknych plaż, kulturze javajskiej, muzyce gamelan i festiwalu Galungan.',
    'irak': 'Państwo w Azji Zachodniej, graniczące z Turcją, Iranem, Kuwejtem, Arabią Saudyjską, Jordanią i Syrią. Bagdad jest stolicą kraju i jego największym miastem. Irak to kraj o pięknych krajobrazach, znanym z Parku Narodowego Al-Ahwar, ruin starożytnych miast, takich jak Babilon czy Nimrud, kulturze sumeryjskiej, muzyce irackiej i festiwalu Nowruz.',
    'iran': 'Państwo w Azji Zachodniej, graniczące z Afganistanem, Pakistanem, Irakiem, Turcją, Armenią, Azerbejdżanem i Turkmenistanem. Teheran jest stolicą kraju i jego największym miastem. Iran to kraj o pięknych krajobrazach, znanym z pięknych wzgórz, gór i dolin, takich jak dolina Shahr-e Kord czy Góry Zagros, starożytnych ruin, takich jak Persepolis czy Pasargady, kulturze perskiej, muzyce perskiej i festiwalu Nowruz.',
    'irlandia': "Państwo w Europie Zachodniej, zajmujące większą część wyspy Irlandii, graniczące z Wielką Brytanią. Dublin jest stolicą kraju i jego największym miastem. Irlandia to kraj o pięknych krajobrazach, znanym z Cliffs of Moher, Półwyspu Dingle, pięknych plaż, kulturze celtyckiej, muzyce irlandzkiej i festiwalach takich jak St. Patrick's Day czy Bloomsday.",
    'islandia': 'Państwo na północy Europy, położone na wyspie o tej samej nazwie. Reykjavik jest stolicą kraju i jego największym miastem. Islandia to kraj o pięknych krajobrazach, znanym z gejzerów, wodospadów, lodowców, pięknych fiordów, kulturze islandzkiej, muzyce islandzkiej i festiwalu Iceland Airwaves.',
    'izrael': 'Państwo w Azji Zachodniej, graniczące z Libanem, Syrią, Jordanem, Egiptem i Palestyną. Jerozolima jest stolicą kraju, a Tel Awiw-Jafa jego największym miastem. Izrael to kraj o pięknych krajobrazach, znanym z Morza Martwego, Parku Narodowego Masada, pięknych plaż na wybrzeżu Morza Śródziemnego, kulturze żydowskiej, muzyce izraelskiej i festiwalu Sukkot.',
    'jamajka': 'Państwo w Ameryce Środkowej i Karaibach, położone na wyspie o tej samej nazwie. Kingston jest stolicą kraju i jego największym miastem. Jamajka to kraj o pięknych krajobrazach, znanym z Blue Mountains, pięknych plaż, kulturze jamajskiej, muzyce reggae i festiwalu Reggae Sumfest.',
    'japonia': 'Państwo w Azji Wschodniej, składające się z archipelagu wysp, graniczące z Rosją, Koreą i Chinami. Tokio jest stolicą kraju i jego największym miastem. Japonia to kraj o pięknych krajobrazach, znanym z Góry Fudżi, Parku Narodowego Shiretoko, pięknych ogrodów i świątyń, kulturze japońskiej, muzyce japońskiej i festiwalach takich jak Sakura Matsuri czy Gion Matsuri.',
    'jordania': 'Państwo w Azji Zachodniej, graniczące z Syrią, Irakiem, Arabią Saudyjską, Izraelem i Palestyną. Amman jest stolicą kraju, a Aqaba jego największym miastem. Jordania to kraj o pięknych krajobrazach, znanym z Petra, Wadi Rum, Morza Martwego, kulturze arabskiej, muzyce arabskiej i festiwalu Eid al-Adha.',
    'kambodża': 'Państwo w Azji Południowo-Wschodniej, graniczące z Tajlandią, Laos i Wietnamem. Phnom Penh jest stolicą kraju i jego największym miastem. Kambodża to kraj o pięknych krajobrazach, znanym z Angkor Wat, Tonle Sap, pięknych plaż na wybrzeżu Morza Południowochińskiego, kulturze khmerskiej, muzyce khmerskiej i festiwalu Bon Om Touk.',
    'kamerun': 'Państwo w Afryce Zachodniej, graniczące z Nigerią, Czadem, Republiką Środkowoafrykańską, Kongiem, Gabonem i Gwineą Równikową. Jaunde jest stolicą kraju i jego największym miastem. Kamerun to kraj o pięknych krajobrazach, znanym z Góry Kamerun, Parku Narodowego Korup, pięknych plaż na wybrzeżu Oceanu Atlantyckiego, kulturze kameruńskiej, muzyce kameruńskiej i festiwalu Ngondo.',
    'kanada': 'Państwo w Ameryce Północnej, graniczące z USA. Ottawa jest stolicą kraju, a Toronto jego największym miastem. Kanada to kraj o pięknych krajobrazach, znanym z Niagara Falls, Gór Skalistych, Jeziora Wielkiego Niedźwiedzia, kulturze indiańskiej, muzyce kanadyjskiej i festiwalach takich jak Calgary Stampede czy Winterlude.',
    'katar': 'Państwo w Azji Zachodniej, graniczące z Arabią Saudyjską i Zjednoczonymi Emiratami Arabskimi. Doha jest stolicą kraju i jego największym miastem. Katar to kraj o pięknych krajobrazach, znanym z Półwyspu Katarskiego, pięknych plaż na wybrzeżu Zatoki Perskiej, kulturze arabskiej, muzyce arabskiej i festiwalu Eid al-Fitr.',
    'kazakhstan': 'Państwo w Azji Środkowej, graniczące z Rosją, Chinami, Kirgistanem, Uzbekistanem i Turcją. Nur-Sułtan (dawniej Astana) jest stolicą kraju, a Almaty jego największym miastem. Kazakhstan to kraj o pięknych krajobrazach, znanym z jeziora Bałchasz, Gór Ałatau, Doliny Róż, kulturze kazachskiej, muzyce kazachskiej i festiwalu Nauryz.',
    'kenia': 'Państwo w Afryce Wschodniej, graniczące z Somalią, Etiopią, Sudanem, Ugandą i Tanzanią. Nairobi jest stolicą kraju i jego największym miastem. Kenia to kraj o pięknych krajobrazach, znanym z Parku Narodowego Masai Mara, Parku Narodowego Amboseli, wybrzeża Oceanu Indyjskiego, kulturze kenijskiej, muzyce kenijskiej i festiwalu Jamhuri Day.',
    'kirgistan': 'Państwo w Azji Środkowej, graniczące z Kazachstanem, Chinami, Tadżykistanem i Uzbekistanem. Biszkek jest stolicą kraju i jego największym miastem. Kirgistan to kraj o pięknych krajobrazach, znanym z Gór Tien-szan, jeziora Issyk-kul, doliny Susamyr, kulturze kirgiskiej, muzyce kirgiskiej i festiwalu Nauryz.',
    'kiribati': 'państwo w Oceanii, składające się z 33 atoli koralowych i jednej wyspy. South Tarawa jest stolicą kraju i jego największym miastem. Kiribati to kraj o pięknych krajobrazach, znanym z Wyspy Bożego Narodzenia, Atolu Kiritimati, pięknych plaż, kulturze i muzyce kiribatyjskiej oraz festiwalu Gospel Day.',
    'kolumbia': 'państwo w Ameryce Południowej, graniczące z Wenezuelą, Brazylią, Peru, Ekwadorem i Panamą. Bogota jest stolicą kraju, a Medellin jego największym miastem. Kolumbia to kraj o pięknych krajobrazach, znanym z Katedry Salty, Parku Narodowego Tayrona, pięknych plaż na wybrzeżu Morza Karaibskiego, kulturze kolumbijskiej, muzyce kolumbijskiej i festiwalu Carnaval de Barranquilla.',
    'komory': 'państwo w Afryce Wschodniej, składające się z trzech wysp głównych i kilku mniejszych wysp. Moroni jest stolicą kraju i jego największym miastem. Komory to kraj o pięknych krajobrazach, znanym z Wyspy Mohéli, Wyspy Anjouan, pięknych plaż na wybrzeżu Oceanu Indyjskiego, kulturze komoryjskie, muzyce komoryjskiej i festiwalu Mwaka Kogwa.',
    'kongo': 'państwo w Afryce Środkowej, graniczące z Republiką Środkowoafrykańską, Sudanem Południowym, Ugandą, Rwandą, Burundiem, Tanzanią, Zambią, Angolą i Gabonem. Brazzaville jest stolicą kraju, a Kinszasa jego największym miastem. Kongo to kraj o pięknych krajobrazach, znanym z Parku Narodowego Salonga, Parku Narodowego Kahuzi-Biega, rzeki Kongo, kulturze kongijskiej, muzyce kongijskiej i festiwalu Fespam.',
    'korea północna': 'państwo w Azji Wschodniej, graniczące z Chinami, Rosją i Koreą Południową. Pjongjang jest stolicą kraju i jego największym miastem. Korea Północna to kraj o pięknych krajobrazach, znanym z Gór Paektu, Wodospadu Ullim, Wielkiego Muzeum Wojny Ojczyźnianej, kulturze koreańskiej i festiwalu Kim Il-sung.',
    'korea południowa': 'państwo w Azji Wschodniej, graniczące z Koreą Północną. Seul jest stolicą kraju i jego największym miastem. Korea Południowa to kraj o pięknych krajobrazach, znanym z Parku Narodowego Jirisan, Jeziora Cheongpung, Pałacu Gyeongbokgung, kulturze koreańskiej, muzyce koreańskiej i festiwalu Boryeong Mud Festival.',
    'kostaryka': 'państwo w Ameryce Środkowej, graniczące z Nikaraguą i Panamą. San Jose jest stolicą kraju i jego największym miastem. Kostaryka to kraj o pięknych krajobrazach, znanym z Parku Narodowego Tortuguero, Parku Narodowego Arenal Volcano, wybrzeża Oceanu Spokojnego, kulturze kostarykańskiej, muzyce kostarykańskiej i festiwalu Día de los Muertos.',
    'kuba': 'państwo w Ameryce Środkowej i Karaibach, graniczące z Bahamami, Haitim, Jamajką, Kajmanami i Meksykiem. Hawana jest stolicą kraju i jego największym miastem. Kuba to kraj o pięknych krajobrazach, znanym z Playa Varadero, Doliny Viñales, Baracoa, kulturze kubańskiej, muzyce kubańskiej i festiwalu Carnaval de Santiago de Cuba.',
    'kuwejt': 'państwo w Azji Zachodniej, graniczące z Irakiem i Arabią Saudyjską. Kuwejt jest stolicą kraju i jego największym miastem. Kuwejt to kraj o pięknych krajobrazach, znanym z Al Shaheed Park, Kuwejckiego Muzeum Narodowego, wieżowca Al Hamra Tower, kulturze kuwejckiej i festiwalu National Day and Liberation Day.',
    'laos': 'państwo w Azji Południowo-Wschodniej, graniczące z Wietnamem, Kambodżą, Tajlandią, Mjanmą i Chinami. Vientiane jest stolicą kraju, a Luang Prabang jego największym miastem. Laos to kraj o pięknych krajobrazach, znanym z Parku Narodowego Phong Nha-Ke Bang, Jaskini Tham Kong Lo, Parku Narodowego Nam Ha, kulturze laotańskiej, muzyce laotańskiej i festiwalu Bun Pi Mai.',
    'lesotho': 'państwo w Afryce Południowej, otoczone w całości przez Republikę Południowej Afryki. Maseru jest stolicą kraju i jego największym miastem. Lesotho to kraj o pięknych krajobrazach, znanym z Parku Narodowego Sehlabathebe, wodospadu Maletsunyane, Sanktuarium Echo, kulturze lesotyjskiej i festiwalu Lesotho Tourism Festival.',
    'liban': 'państwo w Azji Zachodniej, graniczące z Syrią i Izraelem. Bejrut jest stolicą kraju i jego największym miastem. Liban to kraj o pięknych krajobrazach, znanym z Jaskini Jeita, świątyni Baalbek, Muzeum Narodowego w Bejrucie, kulturze libańskiej, muzyce libańskiej i festiwalu Baalbeck International Festival.',
    'liberia': 'państwo w Afryce Zachodniej, graniczące z Wybrzeżem Kości Słoniowej, Gwineą i Sierra Leone. Monrowia jest stolicą kraju i jego największym miastem. Liberia to kraj o pięknych krajobrazach, znanym z Parku Narodowego Sapo, Parku Narodowego Mount Nimba, Wybrzeża Diamentowego, kulturze liberyjskiej, muzyce libery',
    'libia': 'państwo w Afryce Północnej, graniczące z Tunezją, Algierią, Nigrem, Czadem, Sudanem i Egiptem. Trypolis jest stolicą kraju, a Benghazi jego drugim największym miastem. Libia to kraj o pięknych krajobrazach, znanym z Parku Narodowego Garama, Szerokiej Bramy, Muzeum Narodowego w Trypolisie, kulturze libijskiej, muzyce libijskiej i festiwalu Sahara Festival.',
    'liechtenstein': 'państwo w Europie Zachodniej, graniczące z Austrią i Szwajcarią. Vaduz jest stolicą kraju i jego największym miastem. Liechtenstein to kraj o pięknych krajobrazach, znanym z Zamku Vaduz, Muzeum Narodowego Liechtensteinu, Schaaner Bucht, kulturze liechtensteińskiej, muzyce liechtensteińskiej i festiwalu Vaduz Castle Illuminations.'
};
//# sourceMappingURL=app.js.map