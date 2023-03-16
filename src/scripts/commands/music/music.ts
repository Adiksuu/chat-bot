function _music(settings: string) {
  if (!firebase.auth().currentUser) {
    answer = `<i class="fas fa-circle-exclamation"></i> Nie masz uprawnień do korzystania z tej komendy! Musisz posiadać pakiet Premium! Aktualny: ${tier}`;
    return;
  }
  if (settings.includes("play")) {
    m_play();
  } else if (settings.includes("pause")) {
    m_pause();
  } else if (settings.includes("loop")) {
    m_loop();
  } else if (settings.includes("source")) {
    m_source();
  } else if (settings.includes("mute")) {
    m_mute();
  } else {
    answer = `<i class="fas fa-circle-exclamation"></i> Nie znaleziono takiej opcji! Dozwolone akcje: [play/pause/loop/source]`;
  }
}
