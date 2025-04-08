// Compatibilidade com Firefox + Chrome
const storage = (typeof browser !== "undefined" ? browser.storage : chrome.storage);

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("showIcons");

  // Carregar configuração
  storage.sync.get(["showIcons"], (data) => {
    checkbox.checked = data.showIcons !== false;
  });

  // Salvar ao alterar
  checkbox.addEventListener("change", (e) => {
    storage.sync.set({ showIcons: e.target.checked });
  });
});
