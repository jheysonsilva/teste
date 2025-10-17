document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards");
  if (!container) return;

  const projetos = [
    {
      titulo: "Mãos Solidárias",
      descricao: "Capacitação de mulheres em situação de vulnerabilidade social.",
      imagem: "img/maos-solidarias.jpg"
    },
    {
      titulo: "Criança Feliz",
      descricao: "Atividades educativas e recreativas para crianças carentes.",
      imagem: "img/crianca-feliz.jpg"
    },
    {
      titulo: "Alimente o Futuro",
      descricao: "Campanha de arrecadação de alimentos para famílias necessitadas.",
      imagem: "img/ong-fachada.jpg"
    }
  ];

  projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${projeto.imagem}" alt="Projeto: ${projeto.titulo}">
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
    `;
    container.appendChild(card);
  });
});
