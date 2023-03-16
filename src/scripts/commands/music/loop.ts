let music: any = new Audio("");
function m_loop() {
    if (music.loop == false) {
        music.loop = true
        answer = `<i class="fas fa-arrows-spin"></i> Aktualny plik audio będzie uruchamiany w pętli`
    } else {
        music.loop = false
        answer = `<i class="fas fa-arrows-spin"></i> Aktualny plik audio  nie będzie uruchamiany w pętli`
    }
}