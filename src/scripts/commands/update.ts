const news: string = 'Nową komendę /response "pytanie", bot odpowiada na podane pytanie w bardzo zwięzły sposób :D <br><br> Poprawiono kilka błędów - literówki <br><br> Nowa komenda /count "+/-/reset", która umożliwia bawienie się liczbą (domyślnie 0), którą możesz zwiększać, zmniejszać oraz resetować do stanu pierwotnego <br><br> Nowa komenda /rps <rock/paper/scissors>, która umożliwia zagranie w kamień-papier-nożyce z botem! <br><br> Nowa komenda /random, która losuje numer od 0-10' 
function _update() {
    answer = `W ostatniej aktualizacji ${version} wprowadzono: ${news}`
}