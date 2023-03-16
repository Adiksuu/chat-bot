function m_mute() {
  if (music.muted == false) {
    music.muted = true;
    answer = `<i class="fas fa-volume-xmark"></i> Aktualny plik audio został wyciszony`;
  } else {
    music.muted = false;
    answer = `<i class="fas fa-volume-high"></i> Aktualny plik audio został odciszony`;
  }
}
