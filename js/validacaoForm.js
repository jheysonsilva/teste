document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const cpf = form.cpf.value.trim();
    const telefone = form.telefone.value.trim();
    const cidade = form.cidade.value.trim();

    if (!nome || !email || !cpf || !telefone || !cidade) {
      alert("⚠️ Preencha todos os campos obrigatórios!");
      return;
    }

    if (!/^\d{11}$/.test(cpf)) {
      alert("❌ CPF inválido! Digite 11 números.");
      return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert("❌ E-mail inválido! Verifique o formato.");
      return;
    }

    // Simulação de envio
    const usuario = { nome, email, cpf, telefone, cidade, criadoEm: new Date().toISOString() };
    localStorage.setItem("usuarioCadastro", JSON.stringify(usuario));

    alert("✅ Cadastro realizado com sucesso!");
    form.reset();
  });
});
