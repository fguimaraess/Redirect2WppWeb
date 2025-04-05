# 📲 Redirect2WppWeb

**Redirect2WppWeb** é uma extensão para navegadores baseada em Chromium (Edge, Brave, Chrome) que transforma números de celular em links clicáveis para o WhatsApp Web — e ainda oferece um menu de atalho via clique com o botão direito.

---

## 🚀 Funcionalidades

- 🔍 Detecta automaticamente números de celular com DDD válidos na página.
- 🟢 Exibe um **ícone do WhatsApp** ao lado do número (opcional).
- 🖱 Permite redirecionar para o WhatsApp Web ao **clicar com o botão direito** sobre um número selecionado.
- ⚙️ Configuração para **habilitar/desabilitar ícones** diretamente nas opções da extensão.

---

## 🧩 Como usar

### ✅ 1. Carregar a extensão

1. Acesse `chrome://extensions` (ou `edge://extensions`).
2. Ative o **Modo do desenvolvedor**.
3. Clique em **"Carregar sem compactação"**.
4. Selecione a pasta onde está o `manifest.json` da extensão.

---

### 🟢 2. Habilitar os ícones (opcional)

Se quiser ver o ícone de WhatsApp ao lado dos números, ative nas opções da extensão:

- Clique no ícone da extensão > **Opções da extensão**
- Marque a caixa:

![Opções da extensão](./manual/extension-options-page.png)

---

### 🔎 3. Veja o ícone ao lado dos números válidos

Ao acessar uma página que contenha números como:

- `(21) 91483-6747`
- `(11) 91234-5678`

O resultado será:

![Exemplo de ícones aplicados](./manual/page-sample-with-buttons.png)

> Somente números com DDD e iniciados com 9, com formatação legível, terão ícone.

---

### 🖱 4. Clique com o botão direito para enviar no WhatsApp

1. Selecione um número na página.
2. Clique com o **botão direito**.
3. Clique em **“Abrir no WhatsApp Web”**:

![Menu botão direito](./manual/extension-options.png)

---

## ⚠️ Formatos aceitos

Apenas números de celular com DDD, iniciados com 9 e formatados de forma legível:

✔️ Válidos:
- `(21) 96123-1548`
- `+55 (11) 91234-5678`

❌ Ignorados:
- `1198765-4321`
- `21998765432`
- `11912345678`

---

## 🌍 Compatível com:

- Microsoft Edge ✅
- Chrome ✅
- Brave ✅
- Firefox ✅ (com pequeno ajuste em permissões)

---

## 📄 Licença

MIT © 2025
