const NUMERO_WHATSAPP = "5581996411903";

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita recarregar a página

  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const texto = "Olá! Meu nome é " + nome + ".\n\n" + mensagem;

  // encodeURIComponent converte espaços, acentos e símbolos para o formato aceito em links
  const link =
    "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto);

  window.open(link, "_blank", "noopener");
});
