window.onload = () => {
  // Inicia la animación
  document.body.classList.remove("container");

  // Audio
  const music = document.getElementById("backgroundMusic");

  const playMusic = () => {
    if (!music) return;

    music.volume = 0.5;

    music.play()
      .then(() => {
        console.log("Música reproduciéndose 🎵");
      })
      .catch((error) => {
        console.log("Error al reproducir:", error);
      });

    document.removeEventListener("click", playMusic);
    document.removeEventListener("touchstart", playMusic);
  };

  // Primer clic o toque inicia la música
  document.addEventListener("click", playMusic);
  document.addEventListener("touchstart", playMusic);
};
