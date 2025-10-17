document.addEventListener("DOMContentLoaded", () => {
  // Criar botões de acessibilidade dinamicamente
  const btnContainer = document.createElement("div");
  btnContainer.style.position = "fixed";
  btnContainer.style.bottom = "20px";
  btnContainer.style.right = "20px";
  btnContainer.style.display = "flex";
  btnContainer.style.flexDirection = "column";
  btnContainer.style.gap = "10px";
  btnContainer.style.zIndex = "1000";

  const btnEscuro = document.createElement("button");
  btnEscuro.textContent = "Modo Escuro";
  btnEscuro.setAttribute("aria-label", "Ativar modo escuro");

  const btnContraste = document.createElement("button");
  btnContraste.textContent = "Alto Contraste";
  btnContraste.setAttribute("aria-label", "Ativar alto contraste");

  btnContainer.appendChild(btnEscuro);
  btnContainer.appendChild(btnContraste);
  document.body.appendChild(btnContainer);

  // Função modo escuro
  btnEscuro.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
    // Remove alto contraste se estiver ativo
    if (document.body.classList.contains("modo-escuro")) {
      document.body.classList.remove("alto-contraste");
    }
  });

  // Função alto contraste
  btnContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
    // Remove modo escuro se estiver ativo
    if (document.body.classList.contains("alto-contraste")) {
      document.body.classList.remove("modo-escuro");
    }
  });
});
