const isFirefox = typeof browser !== "undefined";
const api = isFirefox ? browser : chrome;

api.runtime.onInstalled.addListener(() => {
  if (api.contextMenus && api.contextMenus.create) {
    api.contextMenus.create({
      id: "redirect2wppweb",
      title: "Abrir no WhatsApp Web: %s",
      contexts: ["selection"]
    });
  }
});

if (api.contextMenus && api.contextMenus.onClicked) {
  api.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "redirect2wppweb" && info.selectionText) {
      const selectedNumber = info.selectionText.replace(/\D/g, '');
      const fullNumber = selectedNumber.startsWith('55') ? selectedNumber : '55' + selectedNumber;
      api.tabs.create({ url: `https://wa.me/+${fullNumber}` });
    }
  });
}
