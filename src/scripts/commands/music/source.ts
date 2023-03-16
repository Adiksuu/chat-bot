function m_source() {
  answer = `Wybierz plik Audio <label for="video-input"><span id="underline"><i class="fas fa-music"></i></span></label> <input type="file" id="video-input" accept="video/*">`;
  window.setTimeout(() => {
    let videoChange: any = document.querySelector("#video-input");
    videoChange.addEventListener("change", (e: any) => {
      const file = videoChange.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        console.log(reader.result)
        music.src = reader.result;
      });
      reader.readAsDataURL(file);
    });
  }, 5500);
}
