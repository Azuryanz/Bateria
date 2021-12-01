// Variável que indica se o som está mutado
const audioEnable = document.querySelector("#checkbox");

document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let composition = document.querySelector("#composition").value;
  
  if(composition !== "") {
    let compositionArray = composition.split("");
    playComposition(compositionArray);
  }
});

function playSound(sound) {
  let audio = document.querySelector(`#${sound}-sound`);
  let key = document.querySelector(`div[data-key="${sound}"]`);
  let volume = document.querySelector("#volume-control");

  // adicionar uma cor ciano nos botões se o som estiver habilitado
  if(volume.value != 0) {
    if(audio) {
      audio.volume = volume.value/100;
      audio.currentTime = 0;
      audio.play();
    }
    if(key) {
      key.classList.add("active");
      setTimeout(() => {
        key.classList.remove("active")
      }, 300);
    }
  // se o som estiver mutado, apenas adicionar uma cor vermelha nas teclas
  } else {
    if(key) {
      key.classList.add("mute");
      setTimeout(() => {
        key.classList.remove("mute");
      }, 300);
    }
  }
}

function playComposition(compositionArray) {
  let wait = 0;

  for(let compositionItem of compositionArray) {
    setTimeout(() => {
      playSound(`key${compositionItem}`);
    }, wait)
    wait += 250;
  }
}

