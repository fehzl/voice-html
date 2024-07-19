export function defaultListeners(vapi, button, assistant, assistantOverrides, squad, buttonStateHandler, anchorElementId) {
  let isActiveCall = false;
  // Selecionando o elemento âncora usando o ID fornecido
  const anchorElement = document.querySelector('#e_386227_1_172142096996108662_d > div');

  const toggleCall = () => {
    buttonStateHandler(button, "loading");
    if (isActiveCall) {
      vapi.stop();
      isActiveCall = false;
    } else {
      if (assistant || assistantOverrides) {
        vapi.start(assistant, assistantOverrides);
      } else {
        console.log('squad ,', squad, assistant, assistantOverrides)
        vapi.start(undefined, undefined, squad)
      }
      isActiveCall = true;
    }
  };

  vapi.on("call-start", () => {
    buttonStateHandler(button, "active");
  });

  vapi.on("call-end", () => {
    buttonStateHandler(button, "idle");
  });

  vapi.on("speech-start", () => {
    button.classList.add("vapi-btn-is-speaking");
  });

  vapi.on("speech-end", () => {
    button.classList.remove("vapi-btn-is-speaking");
  });

  // Evento de clique associado ao botão específico dentro do elemento âncora
  anchorElement.addEventListener("click", toggleCall);

  vapi.on("volume-level", (audioLevel) => {
    const volume = Math.floor(audioLevel * 10);
    for (let i = 0; i <= 10; i++) {
      button.classList.remove(`vapi-btn-volume-${i}`);
    }
    button.classList.add(`vapi-btn-volume-${volume}`);
  });
}
