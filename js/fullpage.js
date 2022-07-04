const fullOffBtn = document.querySelector("#fullpage");
const fullLabel = document.querySelector("#fullLabel");
const documentElement = document.documentElement;

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullLabel.innerText = "❌";
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        fullLabel.innerText = "✖️";
      }
    }
  }

fullOffBtn.addEventListener("click", toggleFullScreen)

window.onload(toggleFullScreen);